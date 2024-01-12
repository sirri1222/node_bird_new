"use client";
import PostForm from "../component/PostForm";
import Login from "../component/main/Login";
import userStore from "../store/store";
export default function Home() {
  const setUsername = userStore((state) => state.setUsername);

  return <>{setUsername("") ? <Login /> : <PostForm />}</>;
}
