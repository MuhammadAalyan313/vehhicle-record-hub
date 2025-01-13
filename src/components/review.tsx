"use client";
import Container from "@/components/container";
import { Paragraph, Typography } from "@/components/typography";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { REVIEWS } from "@/lib/constant";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const Review = () => {
  return (
    <section className="relative after:absolute after:w-full after:h-full after:pointer-events-none after:inset-0 after:bg-gradient-to-t after:from-background after:via-transparent after:to-transparent after:z-10">
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
            Your Trusted Source for Vehicle History
          </Typography>
          <Paragraph>
            Customers across the board trust Vehicle Record Hub to guide them in making informed vehicle purchases. Michael Lee found peace of mind when the report revealed a hidden accident history on a car he almost bought, potentially saving him from a costly mistake.
          </Paragraph>
        </motion.div>
        <div className="lg:columns-3 md:columns-2 columns-1 gap-4 mt-10">
          {REVIEWS.map((data, i) => (
            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
                transition: {
                  type: "spring",
                  delay: Math.random() * 1,
                },
              }}
          viewport={{ once: true }}
              key={i}
            >
              <ReviewCard {...data} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Review;

const ReviewCard = ({ img, name, review }: { review: string, name: string, img: string }) => {
  return (
    <Card className="break-inside-avoid mb-4">
      <CardHeader className="flex flex-row items-center gap-x-3">
        <div className="w-14 h-14 rounded-full p-0.5 ring-2 ring-primary overflow-hidden relative">
          <Image
            src={img}
            alt="avatar"
            fill
          />
        </div>
        <div>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} width={15} className="inline-flex mr-0.5" fill="green" stroke="green" />
          ))}
          <div>{name}</div>
        </div>
      </CardHeader>
      <CardContent>{review}</CardContent>
    </Card>
  );
};
