"use client";
import React, { useCallback, useState } from "react";
import { Form, Input, Button } from "antd";
import useStore from "../store/store";
const PostForm = () => {
  const addPost = useStore((state) => state.addPost);

  const newPost = { content: "새로운 내용" };

  const [text, setText] = useState("");
  const onSubmit = useCallback(() => {
    addPost(newPost);
  }, []);
  const onChageText = useCallback((e) => {
    setText(e.target.value);
  }, []);
  return (
    <div>
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
    </div>
  );
};

export default PostForm;
