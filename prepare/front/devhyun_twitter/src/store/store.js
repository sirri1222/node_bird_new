import { create } from "zustand";

export const useStore = create((set) => ({
  isUserValid: false,
  setIsUserValid: (arg) => set((arg) => ({ isUserValid: arg })),
  username: "", 
  setUsername: (newUsername) => set({ username: newUsername }),
  posts: [{ content: "또구매하려구요" }],
  addPost: (newPost) => set((state) => ({ posts: [...state.posts, newPost] })),
}));

export default useStore;
