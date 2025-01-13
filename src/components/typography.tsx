import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, {
  FC,
  forwardRef,
  HTMLAttributes,
  HtmlHTMLAttributes,
} from "react";

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "lg:text-6xl md:text-5xl text-3xl font-black",
      h2: "lg:text-5xl md:text-4xl text-2xl font-semibold",
      h3: "lg:text-4xl md:text-3xl text-2xl font-bold",
      h4: "lg:text-3xl md:text-2xl text-2xl font-semibold",
      h5: "lg:text-2xl md:text-xl text-lg font-semibold",
      h6: "lg:text-xl md:text-lg text-base font-semibold",
    },
  },
  defaultVariants: {
    variant: "h1",
  },
});

interface TypographyProps
  extends HtmlHTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof typographyVariants> {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Typography = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ tag: Tag, children, variant, className, ...props }, ref) => {
    return (
      <Tag
        ref={ref}
        className={cn(typographyVariants({ variant, className }))}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);
Typography.displayName = "Typography";

export const Paragraph: FC<HTMLAttributes<HTMLParagraphElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p {...props} className={cn("leading-6 md:text-lg text-base", className)}>
      {children}
    </p>
  );
};
