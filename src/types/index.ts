export interface Invoice {
  id: string;
  number: string;
  issueDate: string;
  dueDate: string;
  saleDate: string;
  seller: Company;
  buyer: Company;
  items: InvoiceItem[];
  totalNet: number;
  totalVat: number;
  totalGross: number;
  paymentMethod: "transfer" | "cash" | "card";
  status: "paid" | "unpaid" | "overdue" | "cancelled";
  notes?: string;
}

export interface Company {
  name: string;
  address: string;
  postalCode: string;
  city: string;
  nip: string;
  email?: string;
  phone?: string;
}

export interface InvoiceItem {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  priceNet: number;
  vatRate: number;
  vatAmount: number;
  totalNet: number;
  totalGross: number;
}
