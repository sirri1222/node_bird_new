"use client";
import React, { useState } from "react";
import GridDemo from "../../component/GridDemo";
import { Gif } from "@giphy/react-components";

const page = () => {
  const [modalGif, setModalGif] = useState();
  return (
    <>
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
          <Gif gif={modalGif} width={200} />
        </div>
      )}
    </>
  );
};

export default page;
