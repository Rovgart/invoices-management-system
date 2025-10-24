import React from "react";
import type { Invoice } from "@/types";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { Button } from "./button";
import { Badge } from "./badge";
import { useRouter } from "next/navigation";

type InvoicePropsT = {
  invoice: Invoice;
};

const paymentMethodLabels = {
  transfer: "Przelew",
  cash: "Gotówka",
  card: "Karta",
};
type InvoiceStatus = Pick<Invoice, "status">;
const statusLabels = {
  paid: "Opłacona",
  unpaid: "Nieopłacona",
  overdue: "Przeterminowana",
  cancelled: "Anulowana",
};

function InvoiceStatusBadge({ status }: InvoiceStatus) {
  const statusColorHandler = () => {
    switch (status) {
      case "cancelled":
        return "outline";

      case "overdue":
        return "warning";

      case "paid":
        return "success";
      case "unpaid":
        return "destructive";

      default:
        return "default";
    }
  };
  return <Badge variant={statusColorHandler()}>{statusLabels[status]}</Badge>;
}
function Invoice({ invoice }: InvoicePropsT) {
  const router = useRouter();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{invoice.number}</CardTitle>
        <CardDescription>
          Data wystawienia:{" "}
          {new Date(invoice.issueDate).toLocaleDateString("pl-PL")}
        </CardDescription>
        <CardAction>
          <Button
            onClick={() => router.push(`/dashboard/${invoice.id}`)}
            variant="ghost"
            size="sm"
          >
            Szczegóły
          </Button>
        </CardAction>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-500 mb-1">Nabywca</p>
            <p className="font-medium">{invoice.buyer.name}</p>
            <p className="text-gray-600 text-xs">NIP: {invoice.buyer.nip}</p>
          </div>
          <div>
            <p className="text-gray-500 mb-1">Termin płatności</p>
            <p className="font-medium">
              {new Date(invoice.dueDate).toLocaleDateString("pl-PL")}
            </p>
            <p className="text-gray-600 text-xs">
              {paymentMethodLabels[invoice.paymentMethod]}
            </p>
          </div>
        </div>

        <div className="pt-2 border-t">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Pozycje:</span>
            <span className="font-medium">{invoice.items.length}</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-gray-600">Kwota netto:</span>
            <span className="font-medium">
              {invoice.totalNet.toFixed(2)} zł
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">VAT:</span>
            <span className="font-medium">
              {invoice.totalVat.toFixed(2)} zł
            </span>
          </div>
          <div className="flex justify-between items-center mt-2 pt-2 border-t text-lg">
            <span className="font-semibold">Kwota brutto:</span>
            <span className="font-bold">
              {invoice.totalGross.toFixed(2)} zł
            </span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between items-center">
        <InvoiceStatusBadge status={invoice.status} />
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Edytuj
          </Button>
          <Button variant="default" size="sm">
            Pobierz PDF
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default Invoice;
