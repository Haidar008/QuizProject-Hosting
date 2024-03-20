const nodemailer = require("nodemailer");

async function mailSender(email, subject, body) {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
            tls:{
                rejectUnauthorized:false,
            }
        });

        await transporter.sendMail({
            to: email,
            subject: subject,
            html: body,
        });

        console.log("Email sent successfully!");
    } catch (error) {
        console.error("Error sending email:", error);
        throw new Error("Email sending failed");
    }
}

module.exports = mailSender;
