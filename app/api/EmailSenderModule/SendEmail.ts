"use server"
import nodemailer from "nodemailer";

export async function SendEmail(emailInfo: string, email: string, subject: string) {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'cherrypopice504@gmail.com',
                pass: 'pzpzmqregnffpowm'
            }
        });

        const mailOptions = {
            from: 'cherrypopice504@gmail.com',
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