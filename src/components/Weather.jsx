import React from "react";

const WeatherData = ({ data, togglePopup }) => {
  return (
    <div className="container">
      <div className="top">
        <div className="city">
          <div className="city-subtitle">Weather Today in</div>
          <div
            className="city-title"
            id="city"
            onClick={togglePopup}>
            <span>{data.location.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherData;