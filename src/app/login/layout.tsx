import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Logowanie | Fakturek",
  description: "Panel do obsługi dokumentów księgowych",
  robots: { index: false, follow: false },
};
function LoginLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export default LoginLayout;
