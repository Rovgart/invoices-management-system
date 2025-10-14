import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function OnboardingThirdStep() {
  return (
    <div className="flex flex-col gap-4 max-w-2xl">
      <h1 className="text-3xl">Twoje konto jest w trybie testowym</h1>
      <span>
        Na razie Twoje konto działa w trybie testowym. Po weryfikacji przez
        administratora będziesz mógł przeglądać dokumenty klientów, zatwierdzać
        je i korzystać ze wszystkich funkcji panelu księgowego.
      </span>
      <Button>
        <Link href={"/dashboard"}>Kontynuuj</Link>
      </Button>
    </div>
  );
}

export default OnboardingThirdStep;
