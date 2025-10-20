"use client";
import { useAuthUIStore } from "@/store/auth-store";
import LoginModal from "./ui/LoginModal";
import RegisterModal from "./ui/RegisterModal";

function ModalManager() {
  const { modalType } = useAuthUIStore();

  switch (modalType) {
    case "login-modal":
      return <LoginModal />;
    case "register-modal":
      return <RegisterModal />;
    default:
      return null;
  }
}

export default ModalManager;
