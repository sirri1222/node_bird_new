import React from "react";
import { Button, Card, Popover } from "antd";
import {
  RetweetOutlined,
  MessageOutlined,
  HeartOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import ButtonGroup from "antd/es/button/button-group";

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
                <Button>수정</Button>
                <Button>삭제</Button>
                <Button>신고</Button>
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
