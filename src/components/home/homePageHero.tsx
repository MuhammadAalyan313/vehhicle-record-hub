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
              The History You Need, The Confidence You Want!
            </Typography>
            <Paragraph>
              Comprehensive vehicle history reports offer buyers and sellers the transparency, trust, and clarity needed for confident, informed decisions.
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
