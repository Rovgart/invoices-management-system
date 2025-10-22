import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../form";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Label } from "@radix-ui/react-label";
import { Button } from "../button";
import { Input } from "../input";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { AddCustomerSchema, AddCustomerSchemaValues } from "@/schemas/auth";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select";

function AddCustomerForm() {
  const form = useForm<AddCustomerSchemaValues>({
    resolver: zodResolver(AddCustomerSchema),
    defaultValues: {
      customer_name: "",
      clientType: "Osoba fizyczna",
      nip: "",
      phone_number: "",
      country: "Polska",
    },
  });
  const onSubmit: SubmitHandler<AddCustomerSchemaValues> = async (data) => {
    console.log(data);
  };
  return (
    <Form {...form}>
      <form
        className="space-y-8  rounded-md  flex flex-col "
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="customer_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nazwa klienta</FormLabel>
              <FormControl>
                <Input placeholder="Adam Nowak FHU" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="clientType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Typ klienta</FormLabel>
              <FormControl>
                <Select
                  defaultValue="physical-person"
                  onValueChange={field.onChange}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="physical-person">
                      Osoba fizyczna
                    </SelectItem>
                    <SelectItem value="legal-entity">Osoba prawna</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="nip"
          render={({ field }) => (
            <FormItem>
              <FormLabel>NIP</FormLabel>
              <FormControl>
                <Input placeholder="0123456789" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="adamnowak@example.pl" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Kraj</FormLabel>

              <FormControl>
                <Select defaultValue="poland" onValueChange={field.onChange}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Kraj" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="poland">Polska</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Numer telefonu (opcjonalnie)</FormLabel>

              <FormControl>
                <Input placeholder="Numer telefonu" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Dodaj</Button>
      </form>
    </Form>
  );
}

export default AddCustomerForm;
