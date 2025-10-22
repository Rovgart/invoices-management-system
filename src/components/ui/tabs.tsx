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
import Invoice from "./invoice";

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
  const mockInvoices: Invoice[] = [
    {
      id: "1",
      number: "FV/2024/10/001",
      issueDate: "2024-10-01",
      dueDate: "2024-10-15",
      saleDate: "2024-10-01",
      seller: {
        name: "TechSolutions Sp. z o.o.",
        address: "ul. Kwiatowa 15",
        postalCode: "00-001",
        city: "Warszawa",
        nip: "123-456-78-90",
        email: "kontakt@techsolutions.pl",
        phone: "+48 123 456 789",
      },
      buyer: {
        name: "MediaPro S.A.",
        address: "ul. Długa 8",
        postalCode: "30-001",
        city: "Kraków",
        nip: "987-654-32-10",
        email: "faktury@mediapro.pl",
        phone: "+48 987 654 321",
      },
      items: [
        {
          id: "1",
          name: "Usługa hostingu - pakiet Premium",
          quantity: 1,
          unit: "szt.",
          priceNet: 500.0,
          vatRate: 23,
          vatAmount: 115.0,
          totalNet: 500.0,
          totalGross: 615.0,
        },
        {
          id: "2",
          name: "Konsultacje IT - godziny",
          quantity: 8,
          unit: "godz.",
          priceNet: 150.0,
          vatRate: 23,
          vatAmount: 276.0,
          totalNet: 1200.0,
          totalGross: 1476.0,
        },
      ],
      totalNet: 1700.0,
      totalVat: 391.0,
      totalGross: 2091.0,
      paymentMethod: "transfer",
      status: "paid",
      notes: "Płatność otrzymana w terminie",
    },
    {
      id: "2",
      number: "FV/2024/10/002",
      issueDate: "2024-10-05",
      dueDate: "2024-10-19",
      saleDate: "2024-10-05",
      seller: {
        name: "DesignStudio Polska",
        address: "ul. Artystyczna 22",
        postalCode: "50-001",
        city: "Wrocław",
        nip: "555-123-45-67",
        email: "biuro@designstudio.pl",
        phone: "+48 555 123 456",
      },
      buyer: {
        name: "Fashion House Sp. z o.o.",
        address: "ul. Modowa 33",
        postalCode: "80-001",
        city: "Gdańsk",
        nip: "777-888-99-00",
        email: "accounting@fashionhouse.pl",
      },
      items: [
        {
          id: "1",
          name: "Projekt graficzny logo",
          quantity: 1,
          unit: "szt.",
          priceNet: 2500.0,
          vatRate: 23,
          vatAmount: 575.0,
          totalNet: 2500.0,
          totalGross: 3075.0,
        },
        {
          id: "2",
          name: "Projekt strony internetowej",
          quantity: 1,
          unit: "szt.",
          priceNet: 5000.0,
          vatRate: 23,
          vatAmount: 1150.0,
          totalNet: 5000.0,
          totalGross: 6150.0,
        },
      ],
      totalNet: 7500.0,
      totalVat: 1725.0,
      totalGross: 9225.0,
      paymentMethod: "transfer",
      status: "unpaid",
    },
    {
      id: "3",
      number: "FV/2024/10/003",
      issueDate: "2024-10-10",
      dueDate: "2024-10-24",
      saleDate: "2024-10-09",
      seller: {
        name: "BuildMaster Sp. z o.o.",
        address: "ul. Budowlana 7",
        postalCode: "60-001",
        city: "Poznań",
        nip: "222-333-44-55",
        email: "faktury@buildmaster.pl",
        phone: "+48 222 333 444",
      },
      buyer: {
        name: "Invest Group S.A.",
        address: "ul. Biznesowa 100",
        postalCode: "40-001",
        city: "Katowice",
        nip: "111-222-33-44",
      },
      items: [
        {
          id: "1",
          name: "Materiały budowlane - cement",
          quantity: 50,
          unit: "worek",
          priceNet: 25.0,
          vatRate: 8,
          vatAmount: 100.0,
          totalNet: 1250.0,
          totalGross: 1350.0,
        },
        {
          id: "2",
          name: "Usługa transportu",
          quantity: 1,
          unit: "szt.",
          priceNet: 300.0,
          vatRate: 23,
          vatAmount: 69.0,
          totalNet: 300.0,
          totalGross: 369.0,
        },
      ],
      totalNet: 1550.0,
      totalVat: 169.0,
      totalGross: 1719.0,
      paymentMethod: "cash",
      status: "paid",
      notes: "Płatność gotówką",
    },
    {
      id: "4",
      number: "FV/2024/09/045",
      issueDate: "2024-09-15",
      dueDate: "2024-09-29",
      saleDate: "2024-09-15",
      seller: {
        name: "CloudService Sp. z o.o.",
        address: "ul. Cyfrowa 88",
        postalCode: "02-001",
        city: "Warszawa",
        nip: "444-555-66-77",
        email: "billing@cloudservice.pl",
        phone: "+48 444 555 666",
      },
      buyer: {
        name: "StartupLab Polska",
        address: "ul. Innowacyjna 5",
        postalCode: "31-001",
        city: "Kraków",
        nip: "666-777-88-99",
      },
      items: [
        {
          id: "1",
          name: "Abonament serwer VPS - 3 miesiące",
          quantity: 3,
          unit: "mies.",
          priceNet: 200.0,
          vatRate: 23,
          vatAmount: 138.0,
          totalNet: 600.0,
          totalGross: 738.0,
        },
      ],
      totalNet: 600.0,
      totalVat: 138.0,
      totalGross: 738.0,
      paymentMethod: "transfer",
      status: "overdue",
      notes: "Termin płatności minął",
    },
    {
      id: "5",
      number: "FV/2024/10/004",
      issueDate: "2024-10-12",
      dueDate: "2024-10-26",
      saleDate: "2024-10-12",
      seller: {
        name: "EcoEnergy Sp. z o.o.",
        address: "ul. Zielona 12",
        postalCode: "70-001",
        city: "Szczecin",
        nip: "333-444-55-66",
        email: "kontakt@ecoenergy.pl",
      },
      buyer: {
        name: "Gmina Miasto Słupsk",
        address: "Plac Zwycięstwa 3",
        postalCode: "76-200",
        city: "Słupsk",
        nip: "839-276-88-03",
      },
      items: [
        {
          id: "1",
          name: "Panele fotowoltaiczne 400W",
          quantity: 20,
          unit: "szt.",
          priceNet: 800.0,
          vatRate: 8,
          vatAmount: 1280.0,
          totalNet: 16000.0,
          totalGross: 17280.0,
        },
        {
          id: "2",
          name: "Montaż i uruchomienie instalacji",
          quantity: 1,
          unit: "szt.",
          priceNet: 3000.0,
          vatRate: 8,
          vatAmount: 240.0,
          totalNet: 3000.0,
          totalGross: 3240.0,
        },
      ],
      totalNet: 19000.0,
      totalVat: 1520.0,
      totalGross: 20520.0,
      paymentMethod: "transfer",
      status: "unpaid",
      notes: "Płatność przelewem na konto 12 3456 7890 1234 5678 9012 3456",
    },
  ];
  return (
    <section className="grid grid-cols-[repeat(auto-fit,minmax(450px,1fr))] gap-4">
      {mockInvoices.map((inv) => (
        <Invoice key={inv.id} invoice={inv} />
      ))}
    </section>
  );
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
