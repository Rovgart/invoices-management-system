"use client";
import { useRouter, useSearchParams } from "next/navigation";
import TabView from "./tabView";
import DashboardSidebar from "./dashboardSidebar";

export default function Dashboard() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentTab = searchParams.get("tab") || "invoices";

  return (
    <>
      <DashboardSidebar />
      <TabView currentTab={currentTab} />
    </>
  );
}
