import React from "react";

const PostCard = () => {
  const addPost = userStore((state) => state.setIsUserValid);

  const newPost = { content: "새로운 내용" };
  addPost(newPost);
  return <div>PostCard</div>;
};

export default PostCard;
