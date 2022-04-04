const express = require('express');
const app = express();
require('dotenv').config();
const nodemailer = require('nodemailer');
const PORT = process.env.PORT || 3001;

// express middleware, used to be bodyparser
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

app.post('/api/mail-data', (req, res) => {
    const card = req.body;
    const fs = require('fs').promises;
    const path = require('path');

    fs.writeFile(path.join(__dirname, `../client/src/assets/images/profileImage/${card.profileImage.name}`), card.profileImage)
        .then(res => {
            const options = {
                from: 'rhc.nodem@outlook.com',
                to: 'zachyarbro@gmail.com',
                subject: `Sample 10K Card Information - ${card.firstName} ${card.lastName}`,
                text: `
            First Name: ${card.firstName} 
            Last Name: ${card.lastName}
            Title: ${card.title}

            profile Image: ${card.profileImage}

            --- Link Slots ---
            Slot Title 1: ${card.textFieldTitle1 || 'No Entry'}
            Slot Link 1: ${card.textFieldLink1 || 'No Entry'}
            Slot Icon 1: ${card.icon1 || 'No Entry'} 

            Slot Title 2: ${card.textFieldTitle2 || 'No Entry'}
            Slot Link 2: ${card.textFieldLink2 || 'No Entry'}
            Slot Icon 2: ${card.icon2 || 'No Entry'} 

            Slot Title 3: ${card.textFieldTitle3 || 'No Entry'}
            Slot Link 3: ${card.textFieldLink3 || 'No Entry'}
            Slot Icon 3: ${card.icon3 || 'No Entry'} 

            Slot Title 4: ${card.textFieldTitle4 || 'No Entry'}
            Slot Link 4: ${card.textFieldLink4 || 'No Entry'}
            Slot Icon 4: ${card.icon4 || 'No Entry'} 
        `,
                attachments: [{
                    content: `../client/src/assets/images/profileImage/${card.profileImage.name}`
                }]
            }

            transporter.sendMail(options, (err, data) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(data.response);
            });

        }).then(_ => fs.unlink(path.join(__dirname, `../client/src/assets/images/profileImage/${card.profileImage.name}`)))
    res.json(card)
})

// Start the API server
app.listen(PORT, () =>
    console.log(`API Server now listening on PORT ${PORT}!`)
);