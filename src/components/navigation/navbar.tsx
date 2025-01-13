"use client";
import React, { useEffect } from "react";
import Link from "next/link";

import { NAV_MENU } from "@/lib/constant";
import { Button } from "@/components/ui/button";
import Container from "@/components/container";
import Sidebar from "@/components/navigation/sidebar";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Logo } from "../logo";

const Navbar = () => {
  const pathname = usePathname();

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/6738366d2480f5b4f59ee2ac/1icpp973d";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <motion.nav
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
        transition: {
          ease: "easeInOut",
          duration: 0.8,
        },
      }}
    >
      <Container className="py-4">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="lg:flex hidden gap-x-4">
            {NAV_MENU.map(({ name, path }) => (
              <Button
                asChild
                key={name}
                variant={pathname === path ? "default" : "ghost"}
                className="text-base"
              >
                <Link href={path}>{name}</Link>
              </Button>
            ))}
          </div>
          <Sidebar />
          <Button asChild className="lg:block hidden">
            <Link href={"/contact"}>Contact</Link>
          </Button>
        </div>
      </Container>
    </motion.nav>
  );
};

export default Navbar;
