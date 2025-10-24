"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useAuthUIStore } from "@/store/auth-store";
import RegisterForm from "./forms/RegisterForm";
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
