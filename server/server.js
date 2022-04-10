const express = require('express');
const app = express();
require('dotenv').config();
const stripe = require('stripe')(`${process.env.STRIPE_SECRET_KEY}`);
const fs = require('fs');
const path = require('path');
var cors = require('cors')
const nodemailer = require('nodemailer');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../client/src/assets/images/profileImage'));
    },
    filename: (req, file, cb) => {
        cb(null, 'profile-image.jpeg');
    }
});

const upload = multer({ storage }).single('image');

const PORT = process.env.PORT || 3001;

// express middleware, used to be bodyparser
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

const transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    auth: {
        user: 'rhc.nodem@outlook.com',
        pass: process.env.EMAIL_PASS
    }
});

transporter.verify((err, success) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Server is ready to send emails!')
})

app.post('/upload-mail', upload, (req, res) => {
    const card = req.body;
    let slotString = '';
    let referralString = '';

    if(card.referralZip != 'No Entry') {
        referralString += `
            Referral Zip Code: ${card.referralZip}
        `
    } 
    if(card.referralCard != 'No Entry') {
        referralString += `
            Referral Card: ${card.referralCard}
        `
    } 
    if(card.other != 'No Entry') {
        referralString += `
            Other: ${card.other}
        `
    }

    for(let i = 0; i < card.slotNumber; i++) {
        slotString += `
        Slot Title ${i + 1}: ${card[`textFieldTitle${i}`]}
        Slot Link ${i + 1}: ${card[`textFieldLink${i}`]}
        `
    }
    const options = {
        from: 'rhc.nodem@outlook.com',
        to: 'zachyarbro@gmail.com',
        subject: `Sample 10K Card Information - ${card.cardFirstName} ${card.cardLastName}`,
        text: `
            --- Billing Information ---

            Billing Name: ${card.billingFirstName} ${card.billingLastName}
            Billing Email: ${card.email}
            Billing Address: ${card.billingAddress}
            Billing Postal Code: ${card.billingZip}
            Billing State: ${card.billingState}
            Billing City: ${card.billingCity}
            
            --- Referral Information ---
            
            Form Referral Zip: ${card.zip}

            Billing Referral:

            How They Heard About Us: ${card.select}
            ${referralString}

            --- 10K Card Information ---

            Name: ${card.firstName} ${card.lastName}
            Title: ${card.title}
            Theme: ${card.theme}

            --- Slot Information ---

            ${slotString}
        `,
        attachments: [{
            filename: 'profile-image.jpeg',
            path: path.join(__dirname, '../client/src/assets/images/profileImage/profile-image.jpeg')
        }]
    }

    transporter.sendMail(options, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(data.response);
        fs.copyFile(path.join(__dirname, "../client/src/assets/images/profile_image.jpeg"), path.join(__dirname, "../client/src/assets/images/profileImage/profile-image.jpeg"), (err) => {
            if (err) throw err;
          });
    });

    res.json(card);
});

app.post('/payment-intent', async (req, res) => {
    const { amount } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: 'usd'
    })

    res.status(200).send(paymentIntent.client_secret);
})

// Start the API server
app.listen(PORT, () =>
    console.log(`API Server now listening on PORT ${PORT}!`)
);