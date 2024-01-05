"use client";

import React, { useCallback, useState } from "react";
import userInput from "../hooks/userInput";
import { Form, Input, Checkbox } from "antd";


const SignupForm = () => {
  const [id, onChangeId] = userInput("");
  const [password, onChangePassword] = userInput("");
  const [nickname, onChangeNickname] = userInput("");

  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const [TermCheck, setTermCheck] = useState("");
  const [TermError, setTermError] = useState(false);

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );

  const onChangeterm = useCallback((e) => {
    setTermCheck(e.target.checked);
    setTermError(false);
  }, []);
  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!TermCheck) {
      return setTermError(true);
    }
  }, [password, passwordCheck, TermCheck]);
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
            type="password"
            value={password}
            name="user-password"
            onChange={onChangePassword}
            required
          />
        </div>
        <div>
          <label htmlFor="user-passwordcheck">패스워드 확인</label>
          <br />
          <Input
            type="password"
            value={passwordCheck}
            name="user-passwordcheck"
            onChange={onChangePasswordCheck}
            required
          />
          {passwordError && (
            <ErrorMassage>비밀번호가 일치하지 않습니다.</ErrorMassage>
          )}
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
        <div>
          <Checkbox>개인정보 수집에 동의 합니다. </Checkbox>
          {TermError && <ErrorMassage>필수 동의를 체크해 주세요</ErrorMassage>}
        </div>
        <div>
          <button>가입하기</button>
        </div>
      </Form>
    </div>
  );
};

export default SignupForm;
