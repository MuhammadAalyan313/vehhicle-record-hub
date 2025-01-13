"use client"
import { motion } from "framer-motion"
import Container from "../container"
import { Paragraph, Typography } from "../typography"
import Image from "next/image"

const DecodeVinCode = () => {
    const MotionImage = motion.create(Image)
    return (
        <section>
            <Container>
                <motion.div
                    initial={{
                        y: 40,
                        opacity: 0,
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: 0.8,
                        },
                    }}
                    viewport={{
                        once: true,
                    }}
                    className="max-w-5xl mx-auto text-center"
                >
                    <Typography tag="h2" variant={"h2"}>
                        How To Decode VIN Number Characters
                    </Typography>
                    <Paragraph className="mt-4">
                        Understanding a VIN (Vehicle Identification Number) is crucial for unlocking key details about a vehicle’s origin, features, and history. Each digit in the VIN tells a part of the story, from the manufacturing country to the vehicle’s unique serial number.
                    </Paragraph>
                    <MotionImage
                        initial={{
                            opacity: 0,
                        }}
                        whileInView={{
                            opacity: 1,
                            transition: {
                                duration: 1,
                            },
                        }}
                        viewport={{
                            once: true,
                        }}
                        src={"/decode-vin-code.svg"}
                        alt="decode-vin-code"
                        width={500}
                        height={500}
                        className="w-full mt-20"
                    />
                </motion.div>
            </Container>
        </section>
    )
}
export default DecodeVinCode