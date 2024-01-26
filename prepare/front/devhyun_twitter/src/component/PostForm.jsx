"use client";
import { useCallback, useState } from "react";
import { Form, Input } from "antd";

import useStore from "../store/store";
import ReuseButton from "../component/recycle/ReuseButton";
const PostForm = () => {
  const { posts, addPost } = useStore();
  const [text, setText] = useState("");

  const onSubmit = useCallback(() => {
    const newPost = { content: text };
    addPost({ posts, ...newPost });
    setText("");
  }, [addPost, posts, text]);

  const onChageText = useCallback(
    (e) => {
      setText(e.target.value);
      console.log(text);
    },
    [text]
  );

  const { username, setUsername } = useStore();

  const logoutHandler = () => {
    setUsername("");
  };
  return (
    <>
      <button onClick={logoutHandler}>{username}님 로그아웃</button>
      <Form>
        <Input.TextArea
          value={text}
          maxLength={148}
          onChange={onChageText}
        ></Input.TextArea>
        <div className="flex justify-between">
          <input type="file" multiple hidden />
          <ReuseButton text={"이미지 업로드"} />
          <button onClick={onSubmit}>확인</button>
        </div>
      </Form>
    </>
  );
};

export default PostForm;
