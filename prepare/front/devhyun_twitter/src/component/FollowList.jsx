"use client";
import { Avatar, List } from "antd";
import Card from "antd/es/card/Card";
import React from "react";
import { StopOutlined } from "@ant-design/icons";

const FollowList = ({ header, data }) => {
  return (
    <List
      style={{ marginBottom: 20 }}
      grid={{ gutter: 4, xs: 2, md: 3 }}
      size="small"
      header={<div>{header}</div>}
      dataSource={data}
      loadMore={<div style={{textAlign:"center"}}><button>더 보기</button></div>}
      bordered
      renderItem={(item, index) => (
        <List.Item>
          <List.Item.Meta
            description={item.nickname}
          />
        </List.Item>
      )}
    />
  );
};

export default FollowList;
