import { Input } from "antd";

const SignupInput = ({ data }) => {
  return (
    <>
      <label htmlFor={data.inputname}>{data.text}</label>
      <br />
      <Input value={data.value} name={data.inputname} required />
    </>
  );
};

export default SignupInput;
