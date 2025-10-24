import React from "react";
import {
  SidebarProvider,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  Sidebar,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "./sidebar";
import FakturekLogo from "../../../public/fakturek-logo.png";
import Image from "next/image";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./collapsible";

type SubElement = {
  title: string;
  icon: string;
  href: string;
};
type DashboardTabT = {
  title: string;
  icon?: string;
  href: string;
  subElements: SubElement[] | null;
};
const DASHBOARD_TABS: DashboardTabT[] = [
  {
    title: "Faktury",
    icon: "/icons/invoices.svg",
    href: "invoices",
    subElements: null,
  },
  {
    title: "Klienci",
    icon: "/icons/clients.svg",
    href: "customers",
    subElements: null,
  },
  {
    title: "Ustawienia",
    icon: "/icons/settings.svg",
    href: "settings",
    subElements: [
      {
        title: "Dane firmy",
        icon: "",
        href: "/dashboard/settings?tab=company%data",
      },
      {
        title: "Ustawienia faktur",
        icon: "",
        href: "/dashboard/settings?tab=invoice%settings",
      },
      {
        title: "Personalizacja",
        icon: "",
        href: "/dashboard/settings?tab=personalization",
      },
      {
        title: "Powiadomienia",
        icon: "",
        href: "/dashboard/settings?tab=alerts",
      },
      { title: "Konto", icon: "", href: "/dashboard/settings?tab=account" },
      {
        title: "Integracje",
        icon: "",
        href: "/dashboard/settings?tab=integrations",
      },
    ],
  },
  {
    title: "Statystyki",
    icon: "/icons/settings.svg",
    href: "statistics",
    subElements: null,
  },
];

function DashboardSidebar() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <Image src={FakturekLogo} alt="fakturek-logo" />
        </SidebarHeader>
        <SidebarMenu className="p-4">
          {DASHBOARD_TABS.map((item) =>
            item.subElements ? (
              <Collapsible key={item.title} defaultOpen>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>Ustawienia</SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    {item?.subElements.map((subElement) => (
                      <SidebarMenuSub key={item.title}>
                        <SidebarMenuSubItem>
                          <SidebarMenuButton>
                            <Link href={subElement.href}>
                              {subElement.title}
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuSubItem>
                      </SidebarMenuSub>
                    ))}
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ) : (
              <SidebarMenuItem key={item.title} title={item.title}>
                <SidebarMenuButton variant={"default"} asChild>
                  <Link
                    href={`/dashboard/${item.href}`}
                    style={{ fontSize: "var(--text-md)" }}
                    className="leading-tight cursor-pointer font-semibold"
                  >
                    {item.title}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ),
          )}
        </SidebarMenu>
        <SidebarFooter />
      </Sidebar>
    </SidebarProvider>
  );
}

export default DashboardSidebar;
