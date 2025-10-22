"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useAuthUIStore } from "@/store/auth-store";
import { useState } from "react";
import LoginForm from "../forms/LoginForm";
import AddCustomerForm from "../forms/AddCustomerForm";
type ModalPropsT = {
  onChange: () => void;
  open: boolean;
};
function LoginModal() {
  const { modalType, closeModal } = useAuthUIStore();
  return (
    <Dialog
      open={modalType === "add-customer"}
      onOpenChange={() => closeModal()}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dodaj klienta</DialogTitle>
          <DialogDescription>
            Podaj dane klienta, którego chcesz dodać
          </DialogDescription>
        </DialogHeader>
        <AddCustomerForm />
      </DialogContent>
    </Dialog>
  );
}
export default LoginModal;
