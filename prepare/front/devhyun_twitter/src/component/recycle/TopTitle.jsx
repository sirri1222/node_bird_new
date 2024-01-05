import React from "react";

const TopTitle = ({ titlename }) => {
  return (
    <>
      <p
        style={{ padding: "34px 33px", fontSize: "2rem", textAlign: "center" }}
      >
        {titlename}
      </p>
    </>
  );
};

export default TopTitle;
