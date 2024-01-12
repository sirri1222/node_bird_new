"use client";
import PostForm from "../component/PostForm";
import Login from "../component/main/Login";
import useStore from "../store/store";
export default function Home() {
  const setUsername = useStore((state) => state.setUsername);

  return <>{setUsername("") ? <Login /> : <PostForm />}</>;
}
