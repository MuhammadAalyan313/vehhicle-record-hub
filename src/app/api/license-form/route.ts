import { transporter } from "@/lib/email";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { country, license, email, state } = await req.json();

    await transporter.sendMail({
      from: process.env.USER_EMAIL,
      to: email,
      subject: "Thank you for your details",
    });
    await transporter.sendMail({
      from: process.env.USER_EMAIL,
      to: process.env.USER_EMAIL,
      subject: "New License Form Submission",
      html: `<p>Email:${email}, License Plate:${license}, Country:${country}, State:${state}</p>`,
    });

    return NextResponse.json({ message: "ok" }, { status: 200 });
  } catch (error) {
    console.error(`ERROR WHILE SENDING EMAIL:`, error);
  }
};
