"use client";
import PostCard from "../component/PostCard";
import PostForm from "../component/PostForm";
import Login from "../component/main/Login";
import useStore from "../store/store";
export default function Home() {
  const { posts } = useStore();

  const { username } = useStore();
  return (
    <>
      {username === "" ? (
        <Login />
      ) : (
        <>
          <PostForm />
          {posts.map((p, i) => (
            <PostCard key={i} content={p.content} />
          ))}
        </>
      )}
    </>
  );
}
