import Title from "antd/es/skeleton/Title";
import React from "react";

const page = () => {
  const FollowList = [
    { nickname: "데브현1" },
    { nickname: "데브현2" },
    { nickname: "데브현3" },
  ];
  const FollowingList = [
    { nickname: "데브현1" },
    { nickname: "데브현2" },
    { nickname: "데브현3" },
  ];
  return (
    <div>
      <Title>프로필 페이지</Title>
      <NicknameEditForm />
      <FollowList header="팔로잉 목록" data={FollowList} />
      <FollowList header="팔로우 목록" data={FollowingList} />
    </div>
  );
};

export default page;
