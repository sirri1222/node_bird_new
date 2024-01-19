import userInput from "../hooks/userInput";

const SignupInput = ({ data }) => {

  return (
    <>
      <label htmlFor={data.inputname}>{data.text}</label>
      <br />
      <Input
        value={data.value}
        name={data.inputname}
        onChange={data.onChangeId}
        required
      />
    </>
  );
};

export default SignupInput;
