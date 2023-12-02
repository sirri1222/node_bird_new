module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "Post",
    {
      //mysql 에는 user 테이블 생성
      //id 가 기본적으로 들어있다.
      content: {},
    },
    {
      charset: "utf8mb4",
      collate: "usf8_general_ci", //이모티콘저장
    }
  );
  User.associate = (db) => {};
  return User;
};
