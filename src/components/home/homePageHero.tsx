"use client";
import Image from "next/image";
import Container from "../container";
import { motion } from "framer-motion";
import { Paragraph, Typography } from "../typography";
import VinForm from "../vinForm";

const HomePageHero = () => {
  return (
    <section>
      <Container className="flex items-center relative">
       
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 items-center">
          <motion.div
            initial={{
              x: -50,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.9,
                ease: "easeInOut",
              },
            }}
            className="col-span-1 space-y-2 lg:text-left text-center"
          >
            <Typography tag="h1" variant={"h1"}>
              Helping You Find the Perfect Vehicle
            </Typography>
            <Paragraph>
              Discover peace of mind with our comprehensive vehicle history
              reports. Our user-friendly platform provides you with reliable
              information, ensuring you make an informed decision when buying a
              used vehicle. Let us help you avoid surprises and find the right
              car.
            </Paragraph>
          </motion.div>
          <motion.div
            initial={{
              x: 50,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.9,
                ease: "easeInOut",
              },
            }}
            className="col-span-1"
          >
            <VinForm />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
export default HomePageHero;
