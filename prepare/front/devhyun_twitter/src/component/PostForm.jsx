"use client";
import { useCallback, useState } from "react";
import { Form, Input } from "antd";

import useStore from "../store/store";
import ReuseButton from "../component/recycle/ReuseButton";
import GifList from "./giphy/gifList";

const PostForm = () => {
  const { posts, addPost } = useStore();
  const [text, setText] = useState("");
  const [gifOpen, setGifOpen] = useState(false);

  const gifhandler = () => {
    setGifOpen(!gifOpen);
  };

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
  console.log(gifOpen, "???");
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
          <button onClick={gifhandler}>gif 이모티콘</button>
          <button onClick={onSubmit}>확인</button>
        </div>
        {gifOpen && (
          <div>
            <GifList />
          </div>
        )}
      </Form>
    </>
  );
};

export default PostForm;
