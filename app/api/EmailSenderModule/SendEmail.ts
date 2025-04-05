"use server"
import nodemailer from "nodemailer";

export async function SendEmail(emailInfo: string, email: string, subject: string) {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'okormorupraisecode@gmail.com',
                pass: 'oxhlcfvexjtpdcfo'
            }
        });

        const mailOptions = {
            from: 'okormorupraisecode@gmail.com',
            to: email,
            subject: subject,
            text: emailInfo,
        };
        await transporter.sendMail(mailOptions)
        return true
    } catch {
        return false
    }
}