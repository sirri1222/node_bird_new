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
          <p className="py-6">포스트 리스트 </p>
          {posts.map((p) => (
            <div key={p.id}>
              <PostCard content={p} />
            </div>
          ))}
        </>
      )}
    </>
  );
}
