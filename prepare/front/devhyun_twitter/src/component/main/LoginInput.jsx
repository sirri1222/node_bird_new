import { Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

const LoginInput = () => {
  return (
    <div className="w-1/3">
      <Form.Item
        name="username"
        rules={[{ required: true, message: "아이디를 입력해주세요" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="아이디"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "비밀번호를 입력해주세요" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="패스워드"
        />
      </Form.Item>
    </div>
  );
};

export default LoginInput;
