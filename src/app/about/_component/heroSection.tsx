"use client"
import HeroSectionWrapper from "@/components/heroSectionWrapper"
import { Paragraph, Typography } from "@/components/typography"
import { motion } from "framer-motion"

const HeroSection = () => {
    return (
        <HeroSectionWrapper>
            <div className="grid lg:grid-cols-2 grid-cols-1 items-center h-full gap-8">
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
                    className="col-span-1 space-y-4 lg:text-left text-center"
                >
                    <Typography tag="h1" variant={"h1"}>
                        We&apos;re helping people choose, care for, and sell vehicles
                    </Typography>
                    <Paragraph>
                    Vehicle Record Hub provides detailed, accurate, and easy-to-understand vehicle history reports to empower buyers and sellers. With our service, you get the insights you need to make informed decisions.
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
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 670 272"
                    >
                        <path
                            fill="#fff"
                            d="M144.455.813H265.74a446.638 446.638 0 0 1 267.576 89.02l114.835 85.921c40.803 30.533 19.21 95.434-31.75 95.434H177.483c-24.433 0-45.454-17.283-50.176-41.257l-33.1-168.007C87.973 30.278 112.195.813 144.454.813z"
                        ></path>
                        <path
                            fill="#f9802d"
                            d="M365.268 69.89v201.298H244.22c.046-66.056.082-129.761.082-184.722 0-19.54 13.045-36.673 31.873-41.911l40.793-11.359c24.263-6.744 48.3 11.508 48.3 36.7v-.006z"
                        ></path>
                        <path
                            stroke="#000"
                            strokeLinejoin="bevel"
                            strokeWidth="5"
                            d="M24.475 188.396s-9.544-.567-19-9.461m18.989 14.406s-9.744 1.711-21.2-2.975m19.968 14.374s-9.62 2.871-21.675-.124m22.948 9.373S14.678 219.614.5 218.114"
                        ></path>
                        <path
                            fill="#FFEB28"
                            d="M238.651 149.594c-40.978 36.436-198.967 10.492-214.93 31.13-1.407.712-2.314 2.13-2.314 3.702l.077 34.498c0 2.155 2.284 3.516 4.197 2.552 45.067-22.706 179.226 7.295 249.948-33.755"
                        ></path>
                        <path
                            stroke="#000"
                            strokeLinejoin="bevel"
                            strokeWidth="5"
                            d="M118.423 109.11s-8.548-4.284-13.725-16.19m11.766 20.727s-9.631-2.273-18.308-11.095m12.673 21.082s-9.976-1.16-19.865-8.667m17.39 17.669s-11.25 1.289-23.686-5.682"
                        ></path>
                        <path
                            fill="#FFEB28"
                            d="M240.033 126.954c-17.978 13.792-88.607-27.222-119.274-25.196-1.572.103-2.964 1.041-3.588 2.49l-13.539 31.729c-.851 1.98.711 4.13 2.851 4.001 50.372-3.083 82.895 39.457 140.944 35.142"
                        ></path>
                        <path
                            fill="#FFEB28"
                            d="M244.189 122.129c-9.136 0-12.627 3.949-10.997 18.158 1.629 14.21-4.723 25.846-.397 31.198 4.346 5.352 43.576 21.763 93.175 21.763 31.956 0 41.798-3.13 46.686-6.636 4.888-3.49 1.253-15.606 1.253-24.217 0-10.945 6.073-26.078-8.76-26.078v6.863c-62.246 13.678-120.965-12.792-120.965-12.792v-8.28.015l.005.006z"
                        ></path>
                        <path
                            fill="#000"
                            d="M333.766 80.14c.546-3.372-.469-6.347-2.274-6.64-1.804-.295-3.712 2.206-4.258 5.578-.547 3.371.469 6.346 2.273 6.64 1.805.294 3.712-2.206 4.259-5.578zm14.611 2.361c.547-3.372-.469-6.347-2.273-6.64-1.805-.294-3.713 2.206-4.259 5.578-.547 3.372.469 6.347 2.274 6.64 1.804.295 3.712-2.206 4.258-5.578z"
                        ></path>
                        <path
                            stroke="#000"
                            strokeLinejoin="bevel"
                            strokeWidth="5"
                            d="M285.987 240.052C254.155 146.237 184.155 88.766 184.155 88.766s-21.156 7.075-32.085 0m213.203 154.611c112.659-9.218 115.139-102.327 148.301-119.13 6.311-1.887 8.342 3.656 14.013 10.358"
                        ></path>
                        <path
                            fill="#FFEB28"
                            d="M489.192 116.235c-29.161 0-56.012 29.486-59.993 65.881-3.98 36.41 16.422 65.896 45.583 65.896 29.161 0 56.012-29.486 60.008-65.896 3.98-36.395-16.436-65.881-45.582-65.881h-.016zm20.077 65.881c-1.887 19.071-14.684 34.523-28.568 34.523-13.885 0-23.598-15.446-21.696-34.523 1.887-19.071 14.684-34.523 28.568-34.523 13.885 0 23.598 15.447 21.696 34.523z"
                        ></path>
                        <path
                            stroke="#000"
                            strokeLinejoin="bevel"
                            strokeWidth="5"
                            d="M433.912 123.227c10.533-13.746 26.815-22.918 44.015-24.825M515.6 259.871c9.425-5.888 16.674-15.158 20.092-25.707M458.257 82.97a120.033 120.033 0 0 1 18.221-4.763"
                        ></path>
                        <path
                            fill="#000"
                            d="m373.219 78.538-35.166-4.564s-.637 22.722 21.085 25.544c15.173 1.969 18.211-8.767 18.668-15.416.187-2.773-1.833-5.203-4.587-5.564z"
                        ></path>
                        <path
                            fill="#000"
                            d="m343.237 74.648-32.909-4.27c-3.647-.475-6.706 2.852-5.819 6.424 1.713 6.907 6.551 16.477 20.149 18.241 21.721 2.817 18.579-20.395 18.579-20.395z"
                        ></path>
                        <mask
                            id="driving-mascot_svg__a"
                            width="74"
                            height="30"
                            x="304"
                            y="70"
                            maskUnits="userSpaceOnUse"
                        >
                            <path
                                fill="#fff"
                                d="m310.328 70.379 32.909 4.27 29.982 3.889c2.758.355 4.779 2.79 4.587 5.564-.452 6.648-3.495 17.384-18.668 15.416-9.703-1.257-14.934-6.49-17.764-11.893-2.276 4.74-7.013 8.675-16.716 7.418-13.598-1.764-18.436-11.334-20.149-18.241-.887-3.572 2.172-6.899 5.819-6.423z"
                            ></path>
                        </mask>
                        <g mask="url(#driving-mascot_svg__a)">
                            <path
                                stroke="#fff"
                                strokeLinejoin="bevel"
                                strokeWidth="5.946"
                                d="m313.902 61.97 9.938 42.024"
                            ></path>
                        </g>
                    </svg>
                </motion.div>
            </div>
        </HeroSectionWrapper>
    )
}
export default HeroSection