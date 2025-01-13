import { AlignJustify } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NAV_MENU } from "@/lib/constant";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { Logo } from "../logo";
import { Paragraph } from "../typography";

const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden block">
        <AlignJustify />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center text-center space-y-3">
          <Logo />
          <Paragraph className="!text-sm">
          Vehicle Record Hub provides detailed, accurate, and easy-to-understand vehicle history reports to empower buyers and sellers.
          </Paragraph>
        </div>
        <div className="flex flex-col items-start gap-y-8 mt-8">
          {NAV_MENU.map(({ name, path }) => (
            <Link
              key={name}
              href={path}
              className="text-3xl font-semibold"
            >
              {name}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
