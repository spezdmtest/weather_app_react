import React from "react";
import WeatherProperty from "./WeatherProperty";
import AllWeatherProperties from "./AllWeatherProperties";

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
  };

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
        <div id="properties">
          <AllWeatherProperties
            title="cloud cover"
            value={`${data.current.cloudcover} %`}
            icon="cloud.png"
          />
          <AllWeatherProperties
            title="humidity"
            value={`${data.current.humidity} %`}
            icon="humidity.png"
          />
          <AllWeatherProperties
            title="wind speed"
            value={`${data.current.windSpeed} km/h`}
            icon="wind.png"
          />
          <AllWeatherProperties
            title="pressure"
            value={`${data.current.pressure} %`}
            icon="gauge.png"
          />
          <AllWeatherProperties
            title="uvIndex"
            value={`${data.current.uvIndex} / 100`}
            icon="uv-index.png"
          />
          <AllWeatherProperties
            title="visibility"
            value={`${data.current.visibility} %`}
            icon="visibility.png"
          />
        </div>
      </div>
    </div>
  );
};

export default WeatherData;
