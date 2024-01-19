import NicknameEditForm from "../../component/NicknameEditForm";
import TopTitle from "../../component/recycle/TopTitle";
import FollowList from "../../component/FollowList";
import { FollowerList, FollowingList } from "../../dummy/dataList";

const page = () => {
  return (
    <>
      <TopTitle titlename={"마이 페이지"} />
      <NicknameEditForm />
      <FollowList header="팔로잉 목록" data={FollowerList} />
      <FollowList header="팔로우 목록" data={FollowingList} />
    </>
  );
};

export default page;
