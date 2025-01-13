import React from "react";
import Container from "@/components/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ } from "@/lib/constant";

const Faq = () => {
  return (
    <section>
      <Container>
        {FAQ.map(({ id, title, paragraph }) => (
          <Accordion type="single" collapsible key={id}>
            <AccordionItem value={String(id)}>
              <AccordionTrigger>{title}</AccordionTrigger>
              <AccordionContent>{paragraph}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </Container>
    </section>
  );
};

export default Faq;
