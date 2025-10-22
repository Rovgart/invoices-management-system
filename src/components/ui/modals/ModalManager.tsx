"use client";
import { useAuthUIStore } from "@/store/auth-store";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import AddCustomerModal from "./AddCustomerModal";
function ModalManager() {
  const { modalType } = useAuthUIStore();

  switch (modalType) {
    case "login-modal":
      return <LoginModal />;
    case "register-modal":
      return <RegisterModal />;
    case "add-customer":
      return <AddCustomerModal />;
    default:
      return null;
  }
}

export default ModalManager;
