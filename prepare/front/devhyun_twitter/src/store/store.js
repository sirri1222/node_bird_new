import { create } from "zustand";

export const userStore = create((set) => ({
  isUserValid: false,
  setIsUserValid: (arg) => set((arg) => ({ isUserValid: arg })),
}));

export default userStore;
