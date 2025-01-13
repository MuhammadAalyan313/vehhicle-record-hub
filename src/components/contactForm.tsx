"use client"
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ContactFormSchema } from "@/lib/forms.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Paragraph, Typography } from "./typography";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });
  const { toast } = useToast()
  const { isSubmitting } = form.formState;


  const onSubmit = async (data: z.infer<typeof ContactFormSchema>) => {
    try {
      const response = await fetch("/api/vin-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      const result = await response.json()
      form.reset()
    } catch (error) {
      toast({
        title: "Somthing went wrong while getting report",
        variant: "destructive"
      })
    }
  };
  return (
    <section>
      <Container>
        <div className="grid grid-cols-12 gap-8 relative">
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
            className="lg:col-span-5 col-span-12 lg:order-1 order-2"
          >
            <Card>
              <CardHeader>
                <CardTitle>Send Your Queries</CardTitle>
                <CardDescription>
                  Have questions or need help? Fill out the form below, and our team will get back to you as soon as possible. We’re here to make your vehicle history check experience easy and worry-free.
                </CardDescription>
              </CardHeader>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <CardContent className="space-y-6">
                    <FormField
                      name="name"
                      disabled={isSubmitting}
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John doe"
                              type="text"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      disabled={isSubmitting}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="johndoe@xyz.com"
                              type="email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      disabled={isSubmitting}

                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="+1 123-456-789"
                              type="text"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      disabled={isSubmitting}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Enter your message"
                              {...field}
                              rows={10}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                  <CardFooter className="items-start">
                    <Button
                      disabled={isSubmitting}
                      type="submit" size={"custom"}>
                      Send Message
                    </Button>
                  </CardFooter>
                </form>
              </Form>
            </Card>
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
            className="lg:col-span-7 col-span-12 lg:order-2 order-1 space-y-10 lg:sticky lg:top-14 lg:right-0 lg:h-96"
          >
            <div className="flex gap-x-4">
              <span className="w-10 h-10 border flex justify-center items-center rounded-md shrink-0">
                <Mail />
              </span>
              <div className="space-y-2">
                <Typography tag="h6" variant={"h6"}>
                  Chat to us
                </Typography>
                <Paragraph>Our friendly team is here to help.</Paragraph>
                <span>Info@vehiclerecordhub</span>
              </div>
            </div>
            <div className="flex gap-x-4">
              <span className="w-10 h-10 border flex justify-center items-center rounded-md">
                <MapPin />
              </span>
              <div className="space-y-2">
                <Typography tag="h6" variant={"h6"}>
                  Visit us
                </Typography>
                <Paragraph>Come say hello at our office HQ.</Paragraph>
              </div>
            </div>
            <div className="flex gap-x-4">
              <span className="w-10 h-10 border flex justify-center items-center rounded-md">
                <Phone />
              </span>
              <div className="space-y-2">
                <Typography tag="h6" variant={"h6"}>
                  Call us
                </Typography>
                <Paragraph>Mon-Fri from 8am to 5pm</Paragraph>
                <span>
                  +1 9122965428
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ContactForm;
