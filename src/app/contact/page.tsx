import ContactForm from "@/components/contactForm";
import { Metadata } from "next";
import HeroSection from "./component/heroSection";

export const metadata: Metadata = {
  title: "Contact Vehicle Record Hub - We're Here to Help",
  description: "Have questions? Contact Vehicle Record Hub for assistance with vehicle history reports, account inquiries, and support. We're available 24/7 to assist you.",
};
const Page = () => {
  return (
    <>
      <HeroSection />
      <ContactForm />
    </>
  );
};

export default Page;
