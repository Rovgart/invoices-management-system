// app/onboarding/page.tsx
import OnboardingClient from "./OnboardingClient";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { step: string };
}) {
  const step = searchParams.step ?? "1";
  return {
    title: `Onboarding – krok ${step} | Fakturek`,
    description: "Przejdź przez proces onboardingu księgowego",
  };
}

export default function OnboardingPage() {
  return <OnboardingClient />;
}
