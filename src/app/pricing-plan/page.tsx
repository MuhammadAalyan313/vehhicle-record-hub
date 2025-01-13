import Faq from "@/components/faq";
import Pricing from "@/components/pricing";
import Review from "@/components/review";
import { Metadata } from "next";
import HeroSection from "./_component/heroSection";
import PricingDetail from "./_component/pricingDetail";

export const metadata: Metadata = {
  title: "Affordable Vehicle History Report Plans - Vehicle Record Hub",
  description:
    "Choose from our flexible pricing plans to get comprehensive vehicle history reports tailored to your needs. Enjoy competitive rates without hidden fees.",
};
const Page = () => {
  return (
    <>
      <Pricing />
      <HeroSection />
      <PricingDetail />
      <Faq />
      <Review />
    </>
  );
};

export default Page;
