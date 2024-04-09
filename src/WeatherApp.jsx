import React, { useState, useEffect } from "react";
import "./style.css";
import Loader from "./img/loader.gif";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [popupActive, setPopupActive] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);
};

// function WeatherApp() {
//   return (
//     <div>
//       <h1>Weather App</h1>
//     </div>
//   );
// }

export default WeatherApp;
