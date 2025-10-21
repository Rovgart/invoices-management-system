import Dashboard from "@/components/ui/dashboard";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Metadata } from "next";
import Link from "next/link";
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
    <main className="grid grid-cols-[250px_1fr]  h-screen">{children}</main>
  );
}
