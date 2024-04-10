import React, { useState, useEffect } from "react";
import "./style.css";
// import Loader from "/img/loader.gif";
import WeatherData from "./components/Weather";
import Loader from "./components/Loader";

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
      console.log(data);
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
         <WeatherData data={weatherData} togglePopup={togglePopup} />
        ) : (
         <Loader />
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
