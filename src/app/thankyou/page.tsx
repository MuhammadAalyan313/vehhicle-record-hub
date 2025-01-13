import Container from "@/components/container"
import { Paragraph, Typography } from "@/components/typography"
import { Metadata } from "next";
import Image from "next/image"

export const metadata: Metadata = {
    title: "Thank You for Choosing Vehicle Record Hub!",
    description: "Thank you for using Vehicle Record Hub. Your request has been successfully received. Our team is here to assist with your vehicle history report needs to ensure you make informed decisions.",
};
const Page = () => {
    return (
        <section>
            <Container className="flex flex-col items-center space-y-8">
                <Image src={"/thankyou.svg"} alt="thank you" width={300} height={300} />
                <div className="text-center">
                    <Typography tag="h1" variant={"h1"}>Thank You </Typography>
                    <Paragraph>
                        Your order is being processed.
                    </Paragraph>
                </div>
            </Container>
        </section>
    )
}
export default Page
