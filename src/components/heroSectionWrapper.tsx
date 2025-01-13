import Image from "next/image";
import React from "react";
import Container from "@/components/container";

interface HeroSectionWrapperProps {
  children: React.ReactNode;
}

const HeroSectionWrapper = ({ children }: HeroSectionWrapperProps) => {
  return (
    <section className="lg:h-[60vh]">
      <Container className="relative">
        <Image
          fill
          src={"/bg- .jpg"}
          alt="bg-image"
          className="w-full absolute top-0 left-0 h-full z-[-1]"
        />
        {children}
      </Container>
    </section>
  );
};

export default HeroSectionWrapper;
