"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../form";
import { Input } from "../input";
import { Checkbox } from "../checkbox";
import { Label } from "../label";
import { Button } from "../button";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginAuthSchema, LoginAuthType } from "@/schemas/auth";

function LoginForm() {
  const onSubmit: SubmitHandler<LoginAuthType> = async (data) => {
    console.log(data);
  };
  const form = useForm({
    resolver: zodResolver(LoginAuthSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });
  return (
    <Form {...form}>
      <form
        className="space-y-8 border p-4 rounded-md shadow-sm flex flex-col w-96"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex items-center  justify-center">
          <picture className="size-8">
            <img
              className="w-full h-full object-cover"
              src="/file.svg"
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
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rememberMe"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex items-center gap-2">
                  <Checkbox onCheckedChange={field.onChange} id="remember-me" />
                  <Label htmlFor="remember-me">Remember me</Label>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button>Login</Button>
      </form>
    </Form>
  );
}

export default LoginForm;
