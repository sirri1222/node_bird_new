"use client";

import React, { useCallback } from "react";
import userInput from "../hooks/userInput";
import { Form, Input } from "antd";

const SignupForm = () => {
  [id, onChangeId] = userInput("");
  [password, onChangePassword] = userInput("");
  [nickname, onChangeNickname] = userInput("");

  const onSubmit = useCallback(() => {}, []);
  return (
    <div>
      <title>회원가입</title>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="userid">아이디</label>
          <br />
          <Input value={id} name="userid" onChange={onChangeId} required />
        </div>
        <div>
          <label htmlFor="user-password">패스워드</label>
          <br />
          <Input
            value={password}
            name="user-password"
            onChange={onChangePassword}
            required
          />
        </div>
        <div>
          <label htmlFor="userid">닉네임</label>
          <br />
          <Input
            value={nickname}
            name="usernickname"
            onChange={onChangeNickname}
            required
          />
        </div>
      </Form>
    </div>
  );
};

export default SignupForm;
