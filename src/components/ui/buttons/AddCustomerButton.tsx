"use client";
import { useAuthUIStore } from "@/store/auth-store";
import React from "react";
import { Button } from "../button";

function AddCustomerButton() {
  const { openModal } = useAuthUIStore();

  return (
    <Button
      onClick={() => openModal("add-customer")}
      variant={"secondary"}
      className="cursor-pointer"
    >
      + Dodaj klienta
    </Button>
  );
}

export default AddCustomerButton;
