import PostCard from "../component/PostCard";
import PostForm from "../component/PostForm";
import Login from "../component/main/Login";
export default function Home() {
  const { isLoggedIn } = useselector((state) => state.user);
  const { mainPost } = useselector((state) => state.post);
  return (
    <>
      {!isLoggedIn && <Login />}
      {isLoggedIn && <PostForm />}
      {mainPost.map((post, i) => (
        <PostCard key={i} post={post} />
      ))}
    </>
  );
}
