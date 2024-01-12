"use client";
import PostCard from "../component/PostCard";
import PostForm from "../component/PostForm";
import Login from "../component/main/Login";
import userStore from "../store/store";
export default function Home() {
  const setIsUserValid = userStore((state) => state.setIsUserValid);

  return <>{setIsUserValid(false) ? <PostForm /> : <Login />}</>;
}
