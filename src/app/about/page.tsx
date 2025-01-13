import Cta from "@/components/cta";
import Review from "@/components/review";
import WhoWeAre from "@/components/whoWeAre";
import { Metadata } from "next";
import HeroSection from "./_component/heroSection";

export const metadata: Metadata = {
  title: "About Elite Vehicle Check - Your Trusted Vehicle History Service",
  description: "Learn about Elite Vehicle Check's commitment to transparency in used car purchases. We provide detailed insights into a vehicle's past to help you buy with confidence.",
};

const Page = () => {
  return (
    <>
      <HeroSection />
      <WhoWeAre
        textOrder="lg:order-2 order-1"
        imageOrder="lg:order-1 order-2"
        image="/who-we-are-2.webp"
      />
      <Review />
      <Cta />
    </>
  );
};

export default Page;
