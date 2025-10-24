import DashboardSidebar from "@/components/ui/dashboardSidebar";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dashboard | Fakturek",
  description: "Panel do obsługi dokumentów księgowych",
};
export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="grid grid-cols-[250px_1fr]  h-screen">
      <DashboardSidebar />
      {children}
    </main>
  );
}
