"use client";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { VinFormSchema } from "@/lib/forms.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import Image from "next/image";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useState } from "react";
import LicenseForm from "./licenseForm";

type Options = "option-one" | "option-two";

const VinForm = () => {
  const form = useForm<z.infer<typeof VinFormSchema>>({
    resolver: zodResolver(VinFormSchema),
    defaultValues: {
      email: "",
      vehicle: "",
      vinNumber: "",
    },
  });
  const { toast } = useToast();
  const router = useRouter();
  const { isSubmitting } = form.formState;
  const [isLicenseSelected, setIsLicenseSelected] =
    useState<Options>("option-one");

  const handleSubmit = async (data: z.infer<typeof VinFormSchema>) => {
    try {
      const response = await fetch("/api/vin-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
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
    <Card className="card-wrapper">
      <CardHeader className="flex justify-between items-start">
        <div className="space-y-1.5">
          <CardTitle>Get Report</CardTitle>
          <CardDescription>
          Reveal Your Vehicle's Past Now
          </CardDescription>
        </div>
        <RadioGroup
          defaultValue="option-one"
          className="flex items-center gap-x-3"
          onValueChange={(value: Options) => {
            setIsLicenseSelected(value);
          }}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="option-one"
              id="option-one"
              className="w-5 h-5"
            />
            <Label htmlFor="option-one" className="text-base font-semibold">
              Vin
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="option-two"
              id="option-two"
              className="w-5 h-5"
            />
            <Label htmlFor="option-two" className="text-base font-semibold">
              License
            </Label>
          </div>
        </RadioGroup>
      </CardHeader>
      {isLicenseSelected === "option-one" ? (
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
                name="vinNumber"
                disabled={isSubmitting}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Vin Number</FormLabel>
                    <FormControl>
                      <Input placeholder="" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="vehicle"
                disabled={isSubmitting}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Vehicle Category</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select vehicle" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="bike">Bike</SelectItem>
                        <SelectItem value="car">Car</SelectItem>
                        <SelectItem value="camper">Camper</SelectItem>
                        <SelectItem value="truck">Truck</SelectItem>
                        <SelectItem value="boat">Boat</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="items-start">
              <Button disabled={isSubmitting} size={"custom"}>
                Get Report
              </Button>
            </CardFooter>
          </form>
        </Form>
      ) : (
        <LicenseForm />
      )}
      <CardFooter className="pt-4 space-y-3 border-t">
        <Image
          className="w-96"
          src={"/payment-Icon.png"}
          alt="payment-Icon"
          width={500}
          height={500}
        />
      </CardFooter>
    </Card>
  );
};

export default VinForm;
