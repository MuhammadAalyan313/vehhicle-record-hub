"use client";
import Container from "@/components/container";
import { Paragraph, Typography } from "@/components/typography";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { INSTRUCTION } from "@/lib/constant";
import { motion } from "framer-motion";

const Instruction = () => {
  const MotionCarouselItem = motion.create(CarouselItem);
  return (
    <section>
      <Container>
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
            },
          }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center space-y-3"
        >
          <Typography tag="h2" variant={"h2"}>
          Trustworthy Data
          </Typography>
          <Paragraph>
          Vehicle Record Hub is the ultimate tool for both buyers and sellers, offering detailed vehicle history reports that ensure transparency and trust. Sellers can present their vehicles with confidence, knowing that the buyer has all the information.
          </Paragraph>
        </motion.div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-ful mt-14"
        >
          <CarouselContent className="-ml-6">
            {INSTRUCTION.map(({ description, svg, title }, i) => (
              <MotionCarouselItem
                key={title}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.8, delay: i * 0.3 },
                }}
                viewport={{ once: true }}
                className="lg:basis-1/2 xl:basis-1/3 space-y-4"
              >
                <div className="h-80 flex justify-center items-center p-4 bg-orange-500/10 rounded-lg">
                  {svg()}
                </div>
                <div className="space-y-1">
                  <Typography tag="h5" variant={"h5"}>
                    {title}
                  </Typography>
                  <Paragraph>{description}</Paragraph>
                </div>
              </MotionCarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Container>
    </section>
  );
};

export default Instruction;
