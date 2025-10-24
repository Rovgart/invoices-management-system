"use client";
import { useSearchParams } from "next/navigation";
import TabView from "./tabView";
import DashboardSidebar from "./dashboardSidebar";

export default function Dashboard() {
  const searchParams = useSearchParams();
  const currentTab = searchParams.get("tab") || "invoices";

  return (
    <>
      <DashboardSidebar />
      <TabView currentTab={currentTab} />
    </>
  );
}
