import Cta from "@/components/cta";
import Faq from "@/components/faq";
import DecodeVinCode from "@/components/home/decodeVinCode";
import HomePageHero from "@/components/home/homePageHero";
import VinNumber from "@/components/home/vinNumber";
import Instruction from "@/components/instruction";
import Review from "@/components/review";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vehicle Record Hub - Comprehensive Vehicle History Reports",
  description: "Get detailed vehicle history reports with Vehicle Record Hub. Protect your investment by accessing accident history, maintenance records, and more to make informed car-buying decisions.",
};
export default function Home() {
  return (
    <>
      <HomePageHero />
      <Instruction />
      <VinNumber />
      <Review />
      <DecodeVinCode />
      <Faq />
      <Cta />
    </>
  );
}
