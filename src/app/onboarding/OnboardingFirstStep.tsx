import { Button } from "@/components/ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  OnboardingSecondStepSchema,
  OnboardingSecondStepValues,
} from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

function OnboardingSecondStep() {
  const router = useRouter();
  const form = useForm<OnboardingSecondStepValues>({
    resolver: zodResolver(OnboardingSecondStepSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
    },
  });
  const onSubmit: SubmitHandler<OnboardingSecondStepValues> = async (data) => {
    router.push("/onboarding?step=2");
    console.log(data);
  };
  return (
    <div className="flex flex-col gap-2 space-y-4 p-4 items-center">
      <h1 className="text-3xl">Jak się nazywasz ?</h1>
      <span className="text-md">Powiedz nam więcej o sobie</span>
      <Form {...form}>
        <form
          className="flex flex-col gap-4 w-full max-w-md"
          onSubmit={form.handleSubmit(onSubmit)}
        >
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
          <Button type="submit" className="mt-4">
            Dalej
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default OnboardingSecondStep;
