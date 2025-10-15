import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Rejestracja  | Fakturek",
  description: "Panel do obsługi dokumentów księgowych",
  robots: { index: false, follow: false },
};
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center m-0 mx-auto">
      {children}
    </div>
  );
}
