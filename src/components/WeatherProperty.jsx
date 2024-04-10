import React from "react";

const WeatherProperty = ({
  icon,
  description,
  temperature,
  localtime,
}) => {
  return (
    <div className="top-left">
      {/* Відображення ікони, опису погоди, температури та часу спостереження */}
      <img
        className="icon"
        src={`/img/${icon}`}
        alt=""
      />
      <div className="description">{description}</div>
      <div className="city-info__subtitle">Актуально на: {localtime}</div>
      <div className="city-info__title">{temperature}°</div>
    </div>
  );
};

export default WeatherProperty;
