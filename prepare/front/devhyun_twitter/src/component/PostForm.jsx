"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Form, Input, Button } from "antd";
import useStore from "../store/store";
const PostForm = () => {
  const { posts, addPost } = useStore();

  const [text, setText] = useState("");

  const newPost = [{ content: "newpost" }];

  const onSubmit = useCallback(() => {
    addPost({ posts, ...newPost });
  }, []);

  const onChageText = useCallback((e) => {
    setText(e.target.value);
  }, []);
  const { username, setUsername } = useStore();
  const logoutHandler = () => {
    setUsername("");
    console.log(username);
  };
  return (
    <>
      <button onClick={logoutHandler}>로그아웃</button>
      <Form>
        <Input.TextArea
          value={text}
          maxLength={148}
          onChange={onChageText}
        ></Input.TextArea>
        <div className="flex justify-between">
          <input type="file" multiple hidden />
          <Button>이미지 업로드 </Button>
          <Button onClick={onSubmit}>확인 </Button>
        </div>
      </Form>
    </>
  );
};

export default PostForm;
