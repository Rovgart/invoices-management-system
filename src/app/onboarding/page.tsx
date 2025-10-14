"use client";
import React, { ReactElement } from "react";
import OnboardingLayout from "./layout";
import OnboardingSecondStep from "./OnboardingFirstStep";
import { useSearchParams } from "next/navigation";
import OnboardingThirdStep from "./OnboardingSecondStep";
function OnboardingPage() {
  const searchParams = useSearchParams();
  const step = searchParams.get("step") || "1";

  const steps: Record<number, ReactElement> = {
    1: <OnboardingSecondStep />,
    2: <OnboardingThirdStep />,
  };
  return <OnboardingLayout>{steps[parseInt(step)]}</OnboardingLayout>;
}

export default OnboardingPage;
