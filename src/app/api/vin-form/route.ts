import { transporter } from "@/lib/email"
import { stripe } from "@/lib/stripe"
import { NextResponse } from "next/server"

export const POST = async (req: Request) => {
    try {
        const { email, vehicle, vinNumber } = await req.json()

        await transporter.sendMail({
            from: process.env.USER_EMAIL,
            to: email,
            subject: "Thank you for your details",
        })
        await transporter.sendMail({
            from: process.env.USER_EMAIL,
            to: process.env.USER_EMAIL,
            subject: "New Contact Form Submission",
            html: `<p>Email:${email}, Vehicle Category:${vehicle}, VinNumber:${vinNumber}</p>`
        })

        return NextResponse.json({ message: "ok" }, { status: 200 })
    } catch (error) {
        console.error(`ERROR WHILE SENDING EMAIL:`, error)
    }
}
