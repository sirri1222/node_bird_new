import { create } from "zustand";

export const useStore = create((set) => ({
  isUserValid: false,
  setIsUserValid: (arg) => set((arg) => ({ isUserValid: arg })),
  username: "",
  setUsername: (newUsername) => set({ username: newUsername }),
  posts: [],
  addPost: (newPost) => set((state) => ({ posts:[newPost, ...state.posts] })),
}));

export default useStore;
