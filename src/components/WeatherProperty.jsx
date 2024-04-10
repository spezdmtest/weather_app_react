import React from "react";

const WeatherProperty = ({
  icon,
  description,
  temperature,
  observationTime,
}) => {
  return (
    <div className="top-left">
      <img
        className="icon"
        src={`/img/${icon}`}
        alt=""
      />
      <div className="description">{description}</div>
      <div className="city-info__subtitle">as of {observationTime}</div>
      <div className="city-info__title">{temperature}°</div>
    </div>
  );
};

export default WeatherProperty;
