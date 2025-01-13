"use client"
import { motion } from "framer-motion"
import Container from "../container"
import { Paragraph, Typography } from "../typography"
import Image from "next/image"
import { useState } from "react"

const VinNumber = () => {
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
                        How to Find Your Car&apos;s VIN?
                    </Typography>
                    <Paragraph className="mt-4">
                        Your car&apos;s VIN can typically be found in several locations. It&apos;s essential to have this 17-digit code for vehicle history checks or registration.
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
                        src={"/vin-location-car.png"}
                        alt="decode-vin-code"
                        width={1000}
                        height={1000}
                        className="w-full mt-20"
                    />
                </motion.div>
            </Container>
        </section>
    )
}
export default VinNumber