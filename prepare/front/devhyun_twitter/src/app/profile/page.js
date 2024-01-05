import React from "react";
import NicknameEditForm from "../../component/NicknameEditForm";
import FollowList from "../../component/FollowList";
import TopTitle from "../../component/recycle/TopTitle";
const page = () => {
  const FollowerList = [
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
      <TopTitle titlename={"마이 페이지"} />
      <NicknameEditForm />
      <FollowList header="팔로잉 목록" data={FollowerList} />
      <FollowList header="팔로우 목록" data={FollowingList} />
    </div>
  );
};

export default page;
