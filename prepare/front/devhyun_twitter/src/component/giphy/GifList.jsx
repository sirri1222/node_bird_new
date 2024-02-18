"use client";
import React, { useState } from "react";
import GridDemo from "../GridDemo";
import { Gif } from "@giphy/react-components";
import { Input } from "antd";
const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

const GifList = () => {
  const [modalGif, setModalGif] = useState();
  // const [serchGif, setSearchGif] = useState([]);
  // const searchdata = async () => {
  //   try {
  //     const res = await axios.get("api.giphy.com/v1/gifs/trending");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  return (
    <>
      {/* <Search
        placeholder="input search text"
        allowClear
        onSearch={onSearch}
        style={{ width: 200 }}
      /> */}
      <GridDemo
        onGifClick={(gif, e) => {
          console.log("gif", gif);
          e.preventDefault();
          setModalGif(gif);
        }}
      />
      {modalGif && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(0, 0, 0, .8)",
          }}
          onClick={(e) => {
            e.preventDefault();
            setModalGif(undefined);
          }}
        >
          <Gif gif={modalGif} width={50} />
        </div>
      )}
    </>
  );
};

export default GifList;
