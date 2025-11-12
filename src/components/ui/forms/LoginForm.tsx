"use client";
import React, { useState } from "react";
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
import { useRouter } from "next/navigation";
import { createClient } from "@/app/utils/supabase/supabaseClient";
import { useAuthUIStore } from "@/store/auth-store";

function LoginForm() {
  const supabase = createClient();
  const { closeModal } = useAuthUIStore();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<LoginAuthType> = async (data) => {
    setIsLoading(true);
    setError(null);

    try {
      const { data: authData, error: authError } =
        await supabase.auth.signInWithPassword({
          email: data.email,
          password: data.password,
        });

      if (authError) {
        setError(authError.message);
        return;
      }

      console.log("Logged in:", authData.user);
      closeModal();
      router.push("/dashboard");
      router.refresh();
    } catch (err) {
      console.error("Unexpected error:", err);
      setError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
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
        className="space-y-8 rounded-md flex flex-col"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {error && (
          <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md">
            {error}
          </div>
        )}

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
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    id="remember-me"
                  />
                  <Label htmlFor="remember-me">Zapamiętaj mnie</Label>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Logowanie..." : "Zaloguj"}
        </Button>
      </form>
    </Form>
  );
}

export default LoginForm;
