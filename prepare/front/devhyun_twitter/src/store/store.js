import { create } from "zustand";

export const useStore = create((set) => ({
  isUserValid: false,
  setIsUserValid: (arg) => set((arg) => ({ isUserValid: arg })),
  username: "",
  setUsername: (newUsername) => set({ username: newUsername }),
  posts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "devj",
      },
      content: "첫번째 게시글",
      Images: [{ src: "https://giphy.com/gifs/HollerStudios-animation-reaction-gif-holler-studios-u1urtU40fCC1BX48rK" }],
      Comments: [{}],
      imgePath: [],
      postAdded: false,
    },
  ],
  addPost: (newPost) =>
    set((state) => ({
      posts: [newPost, ...state.posts],
      postAdded: true,
    })),
}));

export default useStore;
