module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      //mysql 에는 user 테이블 생성
      //id 가 기본적으로 들어있다.
      email: {},
      nickname: {},
      password: {},
    },
    {
      charset: "utf8",
      collate: "usf8_general_ci", //한글저장
    }
  );
  User.associate = (db) => {};
  return User;
};
