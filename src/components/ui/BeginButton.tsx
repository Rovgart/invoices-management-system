"use client";
import { useAuthUIStore } from "@/store/auth-store";
import React from "react";
import { Button } from "./button";

function BeginButton() {
  const { openModal } = useAuthUIStore();
  return (
    <Button
      onClick={() => openModal("register-modal")}
      variant="default"
      size="lg"
      asChild
    >
      <span>Zacznij teraz</span>
    </Button>
  );
}

export default BeginButton;
