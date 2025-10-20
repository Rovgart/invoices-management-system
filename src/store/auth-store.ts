import { create } from "zustand";

export type ModalType = "login-modal" | "register-modal" | "";

interface AuthUIStore {
  modalType: ModalType;
  openModal: (modalT: ModalType) => void;
  closeModal: () => void;
}

export const useAuthUIStore = create<AuthUIStore>((set) => ({
  modalType: "",
  openModal: (modalT) => set({ modalType: modalT }),
  closeModal: () => set({ modalType: "" }),
}));
