import React from "react";

function OnboardingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center  justify-center">
      {children}
    </div>
  );
}

export default OnboardingLayout;
