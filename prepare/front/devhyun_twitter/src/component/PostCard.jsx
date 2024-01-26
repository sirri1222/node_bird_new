import { Card, Popover } from "antd";
import {
  RetweetOutlined,
  MessageOutlined,
  HeartOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import ButtonGroup from "antd/es/button/button-group";
import ReuseButton from "../component/recycle/ReuseButton";

const PostCard = ({ content }) => {
  return (
    <div className="my-3">
      <Card
        //cover={{content.image && <PostImages image={content.image} />}}
        actions={[
          <RetweetOutlined key="retweet" />,
          <HeartOutlined key="heart" />,
          <MessageOutlined key="massage" />,
          <Popover
            key="more"
            content={
              <ButtonGroup>
                <ReuseButton text={"수정"} />
                <ReuseButton text={"삭제"} />
                <ReuseButton text={"신고"} />
              </ButtonGroup>
            }
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
      >
        <p className="py-1">{content.content}</p>
      </Card>
    </div>
  );
};

export default PostCard;
