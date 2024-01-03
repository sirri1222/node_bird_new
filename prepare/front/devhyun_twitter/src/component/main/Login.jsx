"use client";
import React from "react";
import { Button, Checkbox, Form } from "antd";
import LoginInput from "./LoginInput";

function Login() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="mx-auto">
      <p className="text-center py-5">DevTwitter</p>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <LoginInput />
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>로그인 정보 기억하기</Checkbox>
          </Form.Item>

        <Form.Item>
          <Button htmlType="submit" className="login-form-button">
            로그인
          </Button>
          | <a href="/signup">회원가입</a>
          <a className="login-form-forgot" href="/findpassword">
            비밀번호 찾기
          </a>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
