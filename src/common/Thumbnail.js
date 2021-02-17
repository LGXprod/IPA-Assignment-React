import React from "react";

const Thumbnail = ({ image, size }) => {
  return (
    <div
      className={`article-info ${
        size === "large" ? "large-thumbnail" : "small-thumbnail"
      }`}
    >
      <img alt="Road user charge" src={image} />
    </div>
  );
};

export default Thumbnail;
