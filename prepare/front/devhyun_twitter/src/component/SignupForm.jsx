"use client";

import React, { useCallback, useState } from "react";
import userInput from "../hooks/userInput";
import { Form, Input, Checkbox } from "antd";
import TopTitle from "./recycle/TopTitle";
import SignupInput from "./recycle/SignupInput";
import { SignupInputdata } from "../dummy/dataList";

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
      <TopTitle titlename={"회원가입"} />
      <Form onFinish={onSubmit}>
        {SignupInputdata.map((data) => (
          <SignupInput data={data} key={data.value} />
        ))}
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
          {passwordError && <p>비밀번호가 일치하지 않습니다.</p>}
        </div>

        <div>
          <Checkbox>개인정보 수집에 동의 합니다. </Checkbox>
          {TermError && <p>필수 동의를 체크해 주세요</p>}
        </div>
        <div>
          <button>가입하기</button>
        </div>
      </Form>
    </div>
  );
};

export default SignupForm;
