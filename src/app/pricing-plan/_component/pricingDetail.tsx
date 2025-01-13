"use client";
import Container from "@/components/container";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PRICING_DETAILS } from "@/lib/constant";
import { motion } from "framer-motion";

const PricingDetail = () => {
  const MotionCard = motion.create(Card);

  return (
    <section>
      <Container>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-3">
          {PRICING_DETAILS.map(({ description, title, icon: Icon }, i) => (
            <MotionCard
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
                transition: {
                  type: "spring",
                  delay: i * 0.4,
                },
              }}
              key={i}
              viewport={{ once: true }}
            >
              <CardHeader className="space-y-3">
                <Icon width={40} height={40} />
                <CardTitle className="font-normal">{title}</CardTitle>
                <CardDescription className="text-base">
                  {description}
                </CardDescription>
              </CardHeader>
            </MotionCard>
          ))}
        </div>
      </Container>
    </section>
  );
};
export default PricingDetail;
