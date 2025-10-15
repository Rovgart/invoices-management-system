import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: `Onboarding | Fakturek`,
  description: "Panel do obsługi dokumentów księgowych",
};
function OnboardingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center  justify-center">
      {children}
    </div>
  );
}

export default OnboardingLayout;
