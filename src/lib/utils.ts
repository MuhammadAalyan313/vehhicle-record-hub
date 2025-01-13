import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const priceFormater = (
  price: number,
  locale: string = "en-US",
  currency: string = "USD"
) => {
  const formater = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  });

  return formater.format(price);
};

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
