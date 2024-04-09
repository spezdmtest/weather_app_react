import React, { useState, useEffect } from "react";
import "./style.css";
import Loader from "/img/loader.gif";

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

  const togglePopup = () => {
    setPopupActive(!popupActive);
  };

  return (
    <div id="weather-app">
      <div id="root">
        {weatherData ? (
          <div className="container">
            <div className="top">
              <div className="city">
                <div className="city-subtitle">Weather Today in</div>
                <div className="city-title" id="city" onClick={togglePopup}>
                  <span>{weatherData.location.name}</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <img
            className="loader"
            src={Loader}
            alt="loader"
          />
        )}
      </div>
    </div>
  );
};

// function WeatherApp() {
//   return (
//     <div>
//       <h1>Weather App</h1>
//     </div>
//   );
// }

export default WeatherApp;
