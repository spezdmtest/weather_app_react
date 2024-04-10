import React from "react";
import WeatherProperty from "./WeatherProperty";

const WeatherData = ({ data, togglePopup }) => {
  const getImage = (description) => {
    const value = description.toLowerCase();
    switch (value) {
      case "patchy rain nearby":
        return "cloud.png";
      case "cloud":
        return "cloud.png";
      case "overcast":
        return "cloud.png";
      case "fog":
        return "fog.png";
      case "sunny":
        return "sunny.png";
      case "partly cloudy":
        return "partly.png";
      default:
        return "the.png";
    }
  }

  return (
    <div className="container">
      <div className="top">
        <div className="city">
          {/* Відображення назви міста та можливість відкрити спливаюче вікно */}
          <div className="city-subtitle">Weather Today in</div>
          <div
            className="city-title"
            id="city"
            onClick={togglePopup}>
            <span>{data.location.name}</span>
          </div>
        </div>
        <div className="city-info">
          {/* Передача даних про погоду в компонент WeatherProperty */}
          <WeatherProperty
            icon={getImage(data.current.weather_descriptions[0])}
            description={data.current.weather_descriptions[0]}
            temperature={data.current.temperature}
            localtime={data.location.localtime}
          />
        </div>
      </div>
    </div>
  );
};

export default WeatherData;
