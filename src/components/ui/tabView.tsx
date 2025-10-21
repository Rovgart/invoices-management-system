"use client";
import React, { ReactElement, useEffect } from "react";
import { ClientsTab, StatisticsTab } from "./tabs";

type Props = {
  currentTab: string;
};
const tabs: Record<string, ReactElement> = {
  statistics: <StatisticsTab />,
  clients: <ClientsTab />,
};
function TabView({ currentTab }: Props) {
  useEffect(() => {
    console.log(currentTab);
  }, [currentTab]);

  return (
    <div className="grid md:grid-cols-[minmax(0,24px)_minmax(0,1fr)_minmax(0,24px)] grid-cols-1">
      <div className=" col-[1/-1] w-full">{tabs[currentTab]}</div>
    </div>
  );
}

export default TabView;
