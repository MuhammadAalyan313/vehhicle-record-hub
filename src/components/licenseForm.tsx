"use client";
import { CardContent, CardFooter } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LicenseSchema } from "@/lib/forms.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { COUNTRY, STATES } from "@/lib/constant";
import { capitalize } from "@/lib/utils";

const LicenseForm = () => {
  const form = useForm<z.infer<typeof LicenseSchema>>({
    resolver: zodResolver(LicenseSchema),
    defaultValues: {
      country: "",
      license: "",
      email: "",
    },
  });
  const { toast } = useToast();
  const router = useRouter();
  const { isSubmitting } = form.formState;
  const watctCountry = form.watch("country");

  const handleSubmit = async (data: z.infer<typeof LicenseSchema>) => {
    try {
      const response = await fetch("/api/license-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      toast({
        title: "Your details send successfully",
        description: "Our team contact you soon",
      });
      router.push("/pricing-plan");
      form.reset();
    } catch (error) {
      toast({
        title: "Somthing went wrong while getting report",
        variant: "destructive",
      });
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <CardContent className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            disabled={isSubmitting}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="johndoe@xyz.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="license"
            disabled={isSubmitting}
            render={({ field }) => (
              <FormItem>
                <FormLabel>License Plate</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ener license plate"
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
            name="country"
            disabled={isSubmitting}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Country" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.keys(COUNTRY).map((state) => (
                      <SelectItem key={state} value={state.toLowerCase()}>
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {watctCountry && (
            <FormField
              control={form.control}
              name="state"
              disabled={isSubmitting}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>State</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select State" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {COUNTRY[
                        capitalize(watctCountry) as keyof typeof COUNTRY
                      ].map((state) => (
                        <SelectItem key={state} value={state}>
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
        </CardContent>
        <CardFooter className="items-start">
          <Button disabled={isSubmitting} size={"custom"}>
            Get Report
          </Button>
        </CardFooter>
      </form>
    </Form>
  );
};

export default LicenseForm;
