"use client"
import { useCallback, useState } from "react";

// 회원가입 및 로그인 중복되는 부분 커스텀 훅으로 만들기
export default (initialValue = null) => {
 const [value, setValue] = useState(initialValue);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return [value, handler];
};
