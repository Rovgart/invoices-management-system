"use server";

import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { title } from "process";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const items = [
    { title: "Dashboard", icon: "/icons/dashboard.svg", href: "/dashboard" },
    { title: "Invoices", icon: "/icons/invoices.svg", href: "/invoices" },
    { title: "Products", icon: "/icons/products.svg", href: "/products" },
    { title: "Clients", icon: "/icons/clients.svg", href: "/clients" },
    { title: "Settings", icon: "/icons/settings.svg", href: "/settings" },
  ];
  return (
    <div className="grid grid-cols-[200px_1fr] h-screen w-screen">
      <SidebarProvider>
        <Sidebar>
          <SidebarHeader>Fakturek</SidebarHeader>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title} title={item.title}>
                <SidebarMenuButton asChild>
                  <Link href={item.href}>{item.title}</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
          <SidebarFooter />
        </Sidebar>
      </SidebarProvider>
      {children}
    </div>
  );
}
