import React from "react";
import ClockIcon from "images/icons/clock.svg";
import CalendarIcon from "images/icons/calendar.svg";
import "styles/index.css";

const ReadWDate = ({ readDuration, date }) => {
  return (
    <div className="article-info">
      <div className="article-info">
        <div className="centered-row article-time">
          <img
            className="article-icon"
            alt="Clock icon"
            src={ClockIcon}
          />
          <label className="article-icon-label">{readDuration} MIN READ</label>
        </div>
      </div>

      <div className="article-info">
        <div className="centered-row article-date">
          <img
            className="article-icon"
            alt="Calendar icon"
            src={CalendarIcon}
          />
          <label className="article-icon-label">{date}</label>
        </div>
      </div>
    </div>
  );
};

export default ReadWDate;
