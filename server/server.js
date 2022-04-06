const express = require('express');
const app = express();
require('dotenv').config();
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

    for(let i = 0; i < card.slotNumber; i++) {
        slotString += `
        Slot Title ${i + 1}: ${card[`textFieldTitle${i}`]}
        Slot Link ${i + 1}: ${card[`textFieldLink${i}`]}
        Slot Icon ${i + 1}: ${card[`icon${i}`]} 
        `
    }
    const options = {
        from: 'rhc.nodem@outlook.com',
        to: 'zachyarbro@gmail.com',
        subject: `Sample 10K Card Information - ${card.cardFirstName} ${card.cardLastName}`,
        text: `
            --- Billing Information ---
                (Not PCI Compliant)
            Card Number: ${card.cardNumber}
            Month / Year: ${card.monthYear}
            CVC: ${card.cvc}

            First Name: ${card.cardFirstName}
            Last Name: ${card.cardLastName}
            Street Address: ${card.streetAddress}
            City: ${card.city}
            State: ${card.state}
            Zip Code: ${card.zipCode}
            Phone: ${card.phone}

            --- Card Information ---

            First Name: ${card.firstName} 
            Last Name: ${card.lastName}
            Title: ${card.title}
            theme: ${card.theme}

            --- Link Slots ---

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
    });
    res.json(card)
});

// Start the API server
app.listen(PORT, () =>
    console.log(`API Server now listening on PORT ${PORT}!`)
);