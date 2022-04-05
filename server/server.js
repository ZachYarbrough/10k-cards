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

    const options = {
        from: 'rhc.nodem@outlook.com',
        to: 'zachyarbro@gmail.com',
        subject: `Sample 10K Card Information - ${card.cardFirstName} ${card.cardLastName}`,
        text: `
            --- Billing Information ---

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

            --- Link Slots ---

            Slot Title 1: ${card.textFieldTitle0}
            Slot Link 1: ${card.textFieldLink0}
            Slot Icon 1: ${card.icon0} 

            Slot Title 2: ${card.textFieldTitle1}
            Slot Link 2: ${card.textFieldLink1}
            Slot Icon 2: ${card.icon1} 

            Slot Title 3: ${card.textFieldTitle2}
            Slot Link 3: ${card.textFieldLink2}
            Slot Icon 3: ${card.icon2} 

            Slot Title 4: ${card.textFieldTitle3}
            Slot Link 4: ${card.textFieldLink3}
            Slot Icon 4: ${card.icon3}

            Slot Title 5: ${card.textFieldTitle4}
            Slot Link 5: ${card.textFieldLink4}
            Slot Icon 5: ${card.icon4} 

            Slot Title 6: ${card.textFieldTitle5}
            Slot Link 6: ${card.textFieldLink5}
            Slot Icon 6: ${card.icon5} 

            Slot Title 7: ${card.textFieldTitle6}
            Slot Link 7: ${card.textFieldLink6}
            Slot Icon 7: ${card.icon6} 

            Slot Title 8: ${card.textFieldTitle7}
            Slot Link 8: ${card.textFieldLink7}
            Slot Icon 8: ${card.icon7} 

            Slot Title 9: ${card.textFieldTitle8}
            Slot Link 9: ${card.textFieldLink8}
            Slot Icon 9: ${card.icon8} 

            Slot Title 10: ${card.textFieldTitle9}
            Slot Link 10: ${card.textFieldLink9}
            Slot Icon 10: ${card.icon9} 
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