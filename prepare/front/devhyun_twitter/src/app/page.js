"use client";
import PostForm from "../component/PostForm";
import Login from "../component/main/Login";
import useStore from "../store/store";
export default function Home() {
  const { username } = useStore();

  return <>{username === "" ? <Login /> : <PostForm />}</>;
}
