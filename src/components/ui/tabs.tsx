"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";
import { Table } from "./table";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./button";
import { Badge } from "./badge";
import { useAuthUIStore } from "@/store/auth-store";

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        className,
      )}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

function ClientsTab() {
  const { openModal } = useAuthUIStore();
  const clients = [
    {
      id: 1,
      name: "Jan Kowalski",
      email: "jan.kowalski@example.com",
      phone: "+48 123 456 789",
      status: "Aktywny",
      invoiceCount: 12,
      lastInvoice: "2024-10-15",
    },
    {
      id: 2,
      name: "Anna Nowak",
      email: "anna.nowak@example.com",
      phone: "+48 234 567 890",
      status: "Aktywny",
      invoiceCount: 8,
      lastInvoice: "2024-10-18",
    },
    {
      id: 3,
      name: "Piotr Wiśniewski",
      email: "piotr.wisniewski@example.com",
      phone: "+48 345 678 901",
      status: "Nieaktywny",
      invoiceCount: 3,
      lastInvoice: "2024-08-22",
    },
    {
      id: 4,
      name: "Maria Dąbrowska",
      email: "maria.dabrowska@example.com",
      phone: "+48 456 789 012",
      status: "Aktywny",
      invoiceCount: 25,
      lastInvoice: "2024-10-20",
    },
    {
      id: 5,
      name: "Tomasz Lewandowski",
      email: "tomasz.lewandowski@example.com",
      phone: "+48 567 890 123",
      status: "Aktywny",
      invoiceCount: 15,
      lastInvoice: "2024-10-19",
    },
    {
      id: 6,
      name: "Katarzyna Zielińska",
      email: "katarzyna.zielinska@example.com",
      phone: "+48 678 901 234",
      status: "Nieaktywny",
      invoiceCount: 5,
      lastInvoice: "2024-07-10",
    },
    {
      id: 7,
      name: "Michał Szymański",
      email: "michal.szymanski@example.com",
      phone: "+48 789 012 345",
      status: "Aktywny",
      invoiceCount: 18,
      lastInvoice: "2024-10-21",
    },
    {
      id: 8,
      name: "Joanna Woźniak",
      email: "joanna.wozniak@example.com",
      phone: "+48 890 123 456",
      status: "Aktywny",
      invoiceCount: 7,
      lastInvoice: "2024-10-17",
    },
  ];

  return (
    <div className="p-6   ">
      <div className="flex justify-between items-center mb-6 ">
        <h2 className="text-2xl font-bold">Klienci</h2>
        <Button
          onClick={() => openModal("add-customer")}
          variant={"secondary"}
          className="cursor-pointer"
        >
          + Dodaj klienta
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="px-4 py-3 text-left text-sm font-semibold">
              Nazwa
            </TableHead>
            <TableHead className="px-4 py-3 text-left text-sm font-semibold">
              Email
            </TableHead>
            <TableHead className="px-4 py-3 text-left text-sm font-semibold">
              Status
            </TableHead>
            <TableHead className="px-4 py-3 text-left text-sm font-semibold">
              Numer telefonu
            </TableHead>
            <TableHead className="px-4 py-3 text-left text-sm font-semibold">
              Liczba faktur
            </TableHead>
            <TableHead className="px-4 py-3 text-left text-sm font-semibold">
              Ostatnia faktura
            </TableHead>
            <TableHead className="px-4 py-3 text-left text-sm font-semibold">
              Akcje
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clients.map((client) => (
            <TableRow key={client.id}>
              <TableCell className="px-4 py-3">{client.name}</TableCell>
              <TableCell className="px-4 py-3">{client.email}</TableCell>
              <TableCell className="px-4 py-3">
                <Badge
                  className="px-2 py-1 rounded-full text-xs font-medium"
                  variant={client.status === "Aktywny" ? "success" : "outline"}
                >
                  {client.status}
                </Badge>
              </TableCell>
              <TableCell className="px-4 py-3">{client.phone}</TableCell>
              <TableCell className="px-4 py-3">{client.invoiceCount}</TableCell>
              <TableCell className="px-4 py-3">{client.lastInvoice}</TableCell>
              <TableCell className="px-4 py-3 space-x-3">
                <Button variant={"outline"} className=" cursor-pointer">
                  Edytuj
                </Button>
                <Button variant={"destructive"} className=" cursor-pointer">
                  Usuń
                </Button>
                <Button variant={"secondary"} className=" cursor-pointer">
                  Szczegóły
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function ProductsTab() {
  return <div />;
}

function InvoicesTab() {
  return <div />;
}

function SettingsTab() {
  return <div />;
}
function StatisticsTab() {
  return <div />;
}
export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  InvoicesTab,
  ProductsTab,
  ClientsTab,
  SettingsTab,
  StatisticsTab,
};
