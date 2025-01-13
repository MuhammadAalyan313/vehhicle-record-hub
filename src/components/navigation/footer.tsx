"use client";
import React from "react";
import Container from "@/components/container";
import { Paragraph, Typography } from "@/components/typography";
import { NAV_MENU } from "@/lib/constant";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Logo } from "../logo";

const Footer = () => {
  const year = new Date().getFullYear();
  const MotionTypography = motion.create(Typography);
  return (
    <footer>
      <Container>
        <MotionTypography
          initial={{
            y: 50,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              ease: "easeInOut",
              duration: 0.8,
            },
          }}
          viewport={{ once: true }}
          tag="h2"
          className="sm:!text-[5vw] !text-3xl text-center mb-10"
        >
          Vehicle Record Hub
        </MotionTypography>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
          <div className="col-span-1 text-center">
            <div className="flex justify-center">
              <Logo />
            </div>
            <Paragraph className="mt-4">
            Vehicle Record Hub provides detailed, accurate, and easy-to-understand vehicle history reports to empower buyers and sellers. With our service, you get the insights you need to make informed decisions.
            </Paragraph>
          </div>
          <div className="col-span-1 text-center">
            <Typography tag="h5" variant={"h5"}>
              Useful Info
            </Typography>
            <menu className="mt-4 space-y-4">
              {NAV_MENU.map(({ name, path }) => (
                <li key={name}>
                  <Link href={path} className="text-lg">
                    {name}
                  </Link>
                </li>
              ))}
            </menu>
          </div>
          <div className="col-span-1 text-center">
            <Typography tag="h5" variant={"h5"}>
              Contact Info
            </Typography>
            <menu className="mt-4 space-y-4 flex flex-col items-center">
              <li className="flex gap-x-2 items-center">
                <Mail />
                <a href="#">Info@vehiclerecordhub</a>
              </li>
              <li className="flex gap-x-2 items-center">
                <Phone /> <a href="#">+1 9122965428</a>
              </li>
              {/* <li className="flex gap-x-4 items-center">
                <a href="#" target="_blank">
                  <Facebook />
                </a>
                <a href="#" target="_blank">
                  <Instagram />
                </a>
                <a href="#" target="_blank">
                  <Linkedin />
                </a>
              </li> */}
            </menu>
          </div>
        </div>
      </Container>
      <div className="py-4 border-t text-center">
        <Paragraph className="md:text-base text-sm">
          Copyright &copy; {year} Vehicle Record Hub All Right Reserved.
        </Paragraph>
      </div>
    </footer>
  );
};

export default Footer;
