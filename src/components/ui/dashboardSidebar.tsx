import React from "react";
import {
  SidebarProvider,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  Sidebar,
} from "./sidebar";
import FakturekLogo from "../../../public/fakturek-logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const DASHBOARD_TABS = [
  { title: "Faktury", icon: "/icons/invoices.svg", href: "invoices" },
  { title: "Klienci", icon: "/icons/clients.svg", href: "clients" },
  { title: "Ustawienia", icon: "/icons/settings.svg", href: "settings" },
  { title: "Statystyki", icon: "/icons/settings.svg", href: "statistics" },
];

function DashboardSidebar() {
  const router = useRouter();
  const handleTabChange = (tabId: string) => {
    router.push(`/dashboard?tab=${tabId}`);
  };
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <Image src={FakturekLogo} alt="fakturek-logo" />
        </SidebarHeader>
        <SidebarMenu className="p-4">
          {DASHBOARD_TABS.map((item) => (
            <SidebarMenuItem key={item.title} title={item.title}>
              <SidebarMenuButton
                variant={"default"}
                onClick={() => handleTabChange(item.href)}
                asChild
              >
                <span
                  style={{ fontSize: "var(--text-md)" }}
                  className="leading-tight cursor-pointer font-semibold"
                >
                  {item.title}
                </span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        <SidebarFooter />
      </Sidebar>
    </SidebarProvider>
  );
}

export default DashboardSidebar;
