import React from "react";
import {Card} from "antd";
import { RetweetOutlined, MessageOutlined, HeartOutlined } from "@ant-design/icons";


const PostCard = ({ content }) => {
  return (
    <div>
      <Card
        actions={
[<RetweetOutlined />,
<HeartOutlined />,
<MessageOutlined />

]
        }
      >
      <p className="py-1"> {content}</p>
   </Card>
   </div>
  )
};

export default PostCard;
