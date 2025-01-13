"use client"
import React from "react";
import Container from "./container";
import { Paragraph, Typography } from "./typography";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface WhoWeAreProps {
  textOrder: string;
  imageOrder: string;
  image: string;
}

const WhoWeAre = ({ imageOrder, textOrder, image }: WhoWeAreProps) => {
  return (
    <section>
      <Container>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 items-center">
          <motion.div
            initial={{
              x: -50,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.9,
                ease: "easeInOut",
              },
            }}
            viewport={{ once: true }}
            className={cn("col-span-1 space-y-3", textOrder)}
          >
            <Typography tag="h2" variant={"h2"}>
              About Vehicle Report Hub
            </Typography>
            <Paragraph>
            Vehicle Record Hubheck is your one-stop shop for all your vehicle needs. We&apos;re passionate about helping you make informed decisions, whether you&apos;re buying, selling, or simply maintaining your vehicle. Our team of experts provides comprehensive vehicle history reports, expert advice, and personalized assistance to ensure a smooth and hassle-free experience.
            </Paragraph>
          </motion.div>
          <motion.div
            initial={{
              x: 50,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.9,
                ease: "easeInOut",
              },
            }}
            viewport={{ once: true }}
            className={cn("col-span-1", imageOrder)}
          >
            <Image
              src={image}
              alt=""
              width={600}
              height={600}
              className="w-full"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default WhoWeAre;
