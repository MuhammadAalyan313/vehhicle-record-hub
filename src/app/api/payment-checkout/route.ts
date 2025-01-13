import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { price, currency } = await req.json();

    const product = await stripe.products.create({
      name: "Vin Report",
      default_price_data: {
        currency: currency,
        unit_amount: price * 100,
      },
    });
    const checkout = await stripe.checkout.sessions.create({
      success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/thankyou`,
      cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/pricing-plan`,
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price: product.default_price as string,
          quantity: 1,
        },
      ],
    });

    return NextResponse.json({ url: checkout.url }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
};
