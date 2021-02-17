import React from "react";

const Tags = ({ tagNames }) => {
  return (
    <div className="centered-row">
      {tagNames.map((name) => {
        return (
          <div className="article-tag">
            <label>{name}</label>
          </div>
        );
      })}
    </div>
  );
};

export default Tags;
