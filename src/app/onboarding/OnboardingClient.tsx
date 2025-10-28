"use client";

import { useSearchParams } from "next/navigation";
import OnboardingFirstStep from "./OnboardingFirstStep";
import OnboardingSecondStep from "./OnboardingSecondStep";
import OnboardingThirdStep from "./OnboardingSecondStep";
import { ReactElement } from "react";

export default function OnboardingClient() {
  const searchParams = useSearchParams();
  const step = searchParams.get("step") ?? "1";

  const steps: Record<number, ReactElement> = {
    1: <OnboardingFirstStep />,
    2: <OnboardingSecondStep />,
    3: <OnboardingThirdStep />,
  };

  return steps[Number(step)] ?? <OnboardingFirstStep />;
}
