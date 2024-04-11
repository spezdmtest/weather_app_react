import React, { useState, useEffect } from "react";
import "./style.css";
import WeatherData from "./components/WeatherData";
import Loader from "./components/Loader";
import Popup from "./components/Popup";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [popupActive, setPopupActive] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const query = localStorage.getItem("query") || "Romny";
      const response = await fetch(
        `http://api.weatherstack.com/current?access_key=7b048faeac1477bce5ee8a11ba24330e&query=${query}`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      console.log("Error fetching data: ", err);
    }
  };

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("query", city);
    fetchData();
    setPopupActive(false);
  };

  const togglePopup = () => {
    setPopupActive(!popupActive);
  };

  return (
    <div id="app">
      <div id="root">
        {/* Показуємо або компонент з даними погоди, або індикатор завантаження */}
        {weatherData ? (
          <WeatherData
            data={weatherData}
            togglePopup={togglePopup}
          />
        ) : (
          <Loader />
        )}
      </div>
      {popupActive && (
        <Popup
          city={city}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          popupActive={popupActive}
          togglePopup={togglePopup}
        />
      )}
    </div>
  );
};

export default WeatherApp;
