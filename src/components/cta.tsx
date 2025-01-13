import Container from "@/components/container";
import { Paragraph, Typography } from "@/components/typography";
import { SATISFACTION } from "@/lib/constant";

const Cta = () => {
  return (
    <section className="bg-red-500/80">
      <Container>
        <div className="max-w-5xl mx-auto space-y-3 text-center">
          <Typography tag="h2" variant={"h2"}>
            Customer support is always here to help
          </Typography>
          <Paragraph>
            Our team is ready to assist you whenever you need. Whether you have questions about our reports, account issues, or technical support, we’re just a message away.
          </Paragraph>
        </div>
        <div className="flex flex-wrap justify-center xl:gap-40 lg:gap-32 gap-10 mt-14">
          {SATISFACTION.map(({ title, description, svg }) => (
            <div
              key={title}
              className="text-center space-y-2 flex flex-col items-center"
            >
              <div className="xl:w-60 xl:h-60 lg:w-48 lg:h-48 w-32 h-32">
                {svg()}
              </div>
              <Typography tag="h5" variant={"h1"}>
                {title}
              </Typography>
              <Paragraph>{description}</Paragraph>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Cta;
