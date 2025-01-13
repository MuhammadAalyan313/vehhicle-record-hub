import { Albert_Sans } from "next/font/google";
import "./globals.css";

import Footer from "@/components/navigation/footer";
import Navbar from "@/components/navigation/navbar";
import { Toaster } from "@/components/ui/toaster";

const pompiere = Albert_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pompiere.className} antialiased overflow-x-hidden`}>
        <Navbar />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
