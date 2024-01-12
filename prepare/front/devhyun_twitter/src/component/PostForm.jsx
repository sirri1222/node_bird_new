"use client";
import React, { useCallback, useState } from "react";
import { Form, Input, Button } from "antd";

const PostForm = () => {
  const [text, setText] = useState("");
  const onSubmit = useCallback(() => {}, []);
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
          <Button>확인 </Button>
        </div>
      </Form>
    </div>
  );
};

export default PostForm;
