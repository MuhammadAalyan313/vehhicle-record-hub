"use client";
import { useToast } from "@/hooks/use-toast";
import { PRICING } from "@/lib/constant";
import { cn, priceFormater } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "./container";
import { Paragraph, Typography } from "./typography";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const Pricing = () => {
  const MotionCard = motion.create(Card);
  const { toast } = useToast();
  const router = useRouter();
  const [currency, setCurrency] = useState({
    currency: "USD",
    locale: "en-US",
    exchangeRate: 1,
  });
  console.log("currency", currency);

  const checkout = async (price: number, currency: string) => {
    try {
      const response = await fetch("/api/payment-checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ price, currency }),
      });
      const result = await response.json();
      router.push(result.url);
    } catch (error) {
      toast({
        title: "Somthing went wrong while getting report",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    const getUserLocation = async () => {
      const response = await fetch("/api/get-user-country");
      const { currency, locale, exchangeRate } = await response.json();
      console.log(currency, locale, exchangeRate);
      if (exchangeRate && locale && exchangeRate) {
        setCurrency({
          currency,
          locale,
          exchangeRate,
        });
      }
    };
    getUserLocation();
  }, []);
  return (
    <section>
      <Container>
        <div className="max-w-5xl mx-auto space-y-4 text-center">
          <Typography tag="h2" variant={"h2"}>
            Pricing Plan
          </Typography>
          <Paragraph>
            Choose the package that best fits your needs. Whether you&apos;re
            checking a single vehicle or comparing multiple options, we have a
            plan for you. Our detailed reports cover everything from DMV title
            history to accident records.
          </Paragraph>
        </div>
        <div className="flex flex-wrap justify-center gap-10 items-center mt-14">
          {PRICING.map(({ name, price, include }, i) => (
            <MotionCard
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
                transition: {
                  type: "spring",
                  delay: i * 0.4,
                },
              }}
              key={i}
              viewport={{ once: true }}
              className={cn(
                "w-96 overflow-hidden flex flex-col justify-center",
                i === 1 && "ring-2 ring-orange-400 h-[750px]"
              )}
            >
              <CardHeader>
                <CardTitle className="text-center">{name}</CardTitle>
              </CardHeader>
              <div className="bg-orange-500/20 py-4">
                <Typography tag="h4" variant={"h1"} className="text-center">
                  {priceFormater(
                    Math.floor(Math.round(price) * currency.exchangeRate),
                    currency.locale,
                    currency.currency
                  )}
                </Typography>
              </div>
              <CardContent className="flex flex-col items-center gap-y-6 mt-10">
                {include.map((data, i) => (
                  <div className="flex gap-x-3 items-center" key={i}>
                    <Check />
                    <span>{data}</span>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() =>
                    checkout(
                      Math.floor(Math.round(price) * currency.exchangeRate),
                      currency.currency
                    )
                  }
                  variant={"default"}
                  size={"custom"}
                  className="px-14"
                >
                  Get Report
                </Button>
              </CardFooter>
            </MotionCard>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
