import React from "react";

const WeatherProperty = ({ icon, description, temperature, localtime }) => {
  return (
    <div className="city-info">
      <div className="top-left">
        {/* Відображення ікони, опису погоди, температури та часу спостереження */}
        <img
          className="icon"
          src={`/img/${icon}`}
          alt=""
        />
        <div className="description">{description}</div>
      </div>
      <div className="top-right">  
        <div className="city-info__subtitle">as of {localtime}</div>
        <div className="city-info__title">{temperature}°</div>
      </div>
    </div>
  );
};

export default WeatherProperty;
