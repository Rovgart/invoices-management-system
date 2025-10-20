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
import RegisterForm from "./forms/RegisterForm";
type ModalPropsT = {
  onChange: () => void;
  open: boolean;
};
function LoginModal() {
  const { modalType, closeModal } = useAuthUIStore();
  return (
    <Dialog
      open={modalType === "register-modal"}
      onOpenChange={() => closeModal()}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Zarejestruj się</DialogTitle>
          <DialogDescription>Podaj swoje dane dostępu</DialogDescription>
        </DialogHeader>
        <RegisterForm />
      </DialogContent>
    </Dialog>
  );
}
export default LoginModal;
