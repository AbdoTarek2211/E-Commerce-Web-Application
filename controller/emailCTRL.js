const nodemailer = require('nodemailer');
const asyncHandler = require('express-async-handler');
const dotenv = require('dotenv');
dotenv.config();

const sendEmail = asyncHandler(async (data, req, res) => {
    const transporter = nodemailer.createTransport({
        service:"gmail",
        host: 'smtp.gmail.email',
        port: 587,
        secure:false,
        auth: {
            user: process.env.MAIL_ID,
            pass: process.env.MAIL_PASSWORD //dah el config gahz 3la tool..el mafrood y3ny
        }
    });
    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: '"Hello 👻" <abc@gmail.com>', // sender address
        to: data.to, // list of receivers
        subject: data.subject, // Subject line
        text: data.text, // plain text body
        html: data.htm, // html body
    });
    console.log("Message sent: %s", info.messageId);
});

module.exports = { sendEmail };