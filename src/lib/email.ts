import nodemailer from "nodemailer"

export const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASSWORD
    }
})