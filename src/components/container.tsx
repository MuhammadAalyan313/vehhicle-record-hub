import { cn } from "@/lib/utils";
import React, { FC, HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
const Container: FC<ContainerProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        "w-full max-w-[1300px] mx-auto px-2 h-full py-16",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
