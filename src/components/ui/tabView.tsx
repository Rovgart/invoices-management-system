"use client";
import React, { ReactElement, useEffect } from "react";
import { ClientsTab, InvoicesTab, StatisticsTab } from "./tabs";

type Props = {
  currentTab: string;
};
const tabs: Record<string, ReactElement> = {
  invoices: <InvoicesTab />,
  statistics: <StatisticsTab />,
  clients: <ClientsTab />,
};
function TabView({ currentTab }: Props) {
  useEffect(() => {
    console.log(currentTab);
  }, [currentTab]);

  return (
    <div className="grid md:grid-cols-[minmax(0,4rem)_minmax(0,1fr)_minmax(0,4rem)] grid-cols-1">
      <div className=" col-[2/3] w-full">{tabs[currentTab]}</div>
    </div>
  );
}

export default TabView;
