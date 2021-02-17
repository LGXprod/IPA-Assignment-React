import React from "react";
import CityImage from "images/city.jpg";
import "styles/index.css";

const Banner = () => {
  return (
    <div className="banner-width">
      <div id="banner-image-container" className="banner-width">
        <div id="banner-overlay-left">
          <div id="banner-text">
            <h2 style={{ color: "white" }}>
              INFRASTRUCTURE
              <br />
              REPORT
            </h2>
            <hr />
          </div>
        </div>
        <div id="banner-overlay-right"></div>
        <img
          className="banner-image"
          alt="city underpass"
          src={CityImage}
        />
      </div>
    </div>
  );
};

export default Banner;
