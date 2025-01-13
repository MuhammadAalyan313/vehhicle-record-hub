import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z.string({
    required_error: "This field is required. Please input your name",
  }),
  email: z
    .string({
      required_error: "This field is required. Please input a valid email",
    })
    .email(),
  phoneNumber: z.string({
    required_error: "This field is required. Please input phone number",
  }),
  message: z.string({ required_error: "This field is required" }),
});

export const VinFormSchema = z.object({
  email: z.string().email(),
  vinNumber: z.string().length(17).max(17, {
    message: "Vin number should be 17 character",
  }),
  vehicle: z
    .string({ required_error: "Required" })
    .nonempty({ message: "Required" }),
});

export const LicenseSchema = z.object({
  country: z.string().nonempty({ message: "Required" }),
  license: z.string().nonempty({ message: "Required" }),
  email: z.string().email(),
  state: z.string().nonempty({ message: "Required" }),
});
