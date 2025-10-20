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
        className="space-y-8  rounded-md  flex flex-col "
        onSubmit={form.handleSubmit(onSubmit)}
      >
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
              <FormLabel>Hasło</FormLabel>
              <FormControl>
                <Input placeholder="Hasło" type="password" {...field} />
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
                  <Label htmlFor="remember-me">Zapamiętaj mnie</Label>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Zaloguj</Button>
      </form>
    </Form>
  );
}

export default LoginForm;
