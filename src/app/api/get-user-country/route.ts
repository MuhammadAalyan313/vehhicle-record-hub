import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    // Get user currency
    const ip = req.headers.get("x-forwarded-for");
    const data = await (await fetch(`https://ipapi.co/${ip}/json`)).json();
    const { currency, languages } = data;

    const locale = (languages as string).split(",")[1];
    console.log(locale,'local')
    // Get exchange rate
    const exchange = await (
      await fetch(
        `https://v6.exchangerate-api.com/v6/${process.env.EXCHANGE_RATE_API_KEY}/latest/USD`
      )
    ).json();
    const exchangeRate = exchange.conversion_rates[currency];

    return NextResponse.json(
      { currency, exchangeRate, locale },
      { status: 200 }
    );
  } catch (error) {
    console.log(">>>", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
};
