import React from "react";

const WeatherData = ({ data, togglePopup }) => {
  return (
    <div className="container">
      <div className="top">
        <div className="city">
          {/* Відображення назви міста та можливість відкрити спливаюче вікно */}
          <div className="city-subtitle">Погода сьогодні в</div>
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
