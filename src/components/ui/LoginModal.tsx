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
import LoginForm from "./forms/LoginForm";
type ModalPropsT = {
  onChange: () => void;
  open: boolean;
};
function LoginModal() {
  const { modalType, closeModal } = useAuthUIStore();
  return (
    <Dialog
      open={modalType === "login-modal"}
      onOpenChange={() => closeModal()}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Zaloguj się</DialogTitle>
          <DialogDescription>Podaj swoje dane dostępu</DialogDescription>
        </DialogHeader>
        <LoginForm />
      </DialogContent>
    </Dialog>
  );
}
export default LoginModal;
