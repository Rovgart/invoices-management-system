"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormField,
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "../form";
import { Input } from "../input";
import { RegisterAuthSchema } from "@/schemas/auth";
import { Button } from "../button";
import Image from "next/image";
import fakturek_logo from "../../../../public/file.svg";
export default function RegisterForm() {
  const form = useForm({
    resolver: zodResolver(RegisterAuthSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <Form {...form}>
      <form
        className="space-y-8 border p-4 rounded-md shadow-sm flex flex-col w-96"
        onSubmit={form.handleSubmit((data) => {
          // Api call
        })}
      >
        <div className="flex items-center  justify-center">
          <picture className="size-8">
            <Image
              className="w-full h-full object-cover"
              src={fakturek_logo}
              alt="fakturek-logo"
            />
          </picture>
          <span className="font-bold text-2xl ml-2">Fakturek</span>
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
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
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Password" type="password" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Sign up</Button>
      </form>
    </Form>
  );
}
