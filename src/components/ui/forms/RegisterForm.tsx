"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../form";
import { Input } from "../input";
import { RegisterSchema } from "@/schemas/auth";
import { Button } from "../button";
import { z } from "zod";
import Image from "next/image";
import fakturek_logo from "../../../../public/file.svg";

type RegisterFormValues = z.infer<typeof RegisterSchema>;

export default function RegisterForm() {
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      repeat_password: "",
      firstname: "",
      lastname: "",
      company_name: "",
      nip: "",
      phone: "",
      is_accountant: false,
      certificate_number: "",
      office_address: "",
    },
  });

  const onSubmit: SubmitHandler<RegisterFormValues> = async (data) => {
    console.log(data);
  };
  return (
    <div className="flex items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 border p-4 rounded-md shadow-sm flex flex-col w-96"
        >
          <div className="flex items-center gap-2 justify-center mb-2">
            <picture className="size-8">
              <Image
                className="w-full h-full object-cover"
                src={fakturek_logo}
                alt="fakturek-logo"
              />
            </picture>
            <span className="text-2xl">Fakturek</span>
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Imię</FormLabel>
                <FormControl>
                  <Input placeholder="Imię" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nazwisko</FormLabel>
                <FormControl>
                  <Input placeholder="Nazwisko" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nazwa firmy</FormLabel>
                <FormControl>
                  <Input placeholder="Nazwa firmy" {...field} />
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
                  <Input placeholder="NIP" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefon (opcjonalnie)</FormLabel>
                <FormControl>
                  <Input placeholder="Telefon" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hasło</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Hasło" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="repeat_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Powtórz hasło</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Powtórz hasło"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Zarejestruj się
          </Button>
        </form>
      </Form>
    </div>
  );
}
