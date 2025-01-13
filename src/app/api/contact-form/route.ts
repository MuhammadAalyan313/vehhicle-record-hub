import { transporter } from "@/lib/email"
import { NextResponse } from "next/server"

export const POST = async (req: Request) => {
    try {
        const { name, email, phoneNumber, message } = await req.json()

        await transporter.sendMail({
            from: process.env.USER_EMAIL,
            to: email,
            subject: "Thank you for your details",
        })

        await transporter.sendMail({
            from: process.env.USER_EMAIL,
            to: process.env.USER_EMAIL,
            subject: "New Contact Form Submission",
            html: `<p>Email:${email}, Name:${name}, Phone Number:${phoneNumber}, Message:${message}</p>`
        })
        return NextResponse.json({ message: "Sent Successfully" }, { status: 200 })
    } catch (error) {
        console.error(`ERROR WHILE SENDING EMAIL:`, error)
    }
}
