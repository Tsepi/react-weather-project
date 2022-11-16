import axios from "axios";
import React, { useState } from "react";

import WeatherDailyForecast from "./WeatherDailyForecast";
import "./WeatherDaily.css";

export default function WeatherDaily(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setLoaded(true);
    setForecast(response.data.daily);
  }

  if (loaded) {
    console.log(forecast);
    //let iconURL = `http://openweathermap.org/img/wn/${props.forecast[0].weather[0].icon}@2x.png`;

    return (
      <div className="WeatherDaily">
        <div className="container daily">
          <div className="row ">
            <hr />
            <div className="col">
              <WeatherDailyForecast data={forecast[0]} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let latitude = props.coordinates.lat;
    let longtitude = props.coordinates.lon;
    let apiKey = `7d88e39fad8e3a2f1b2d1076c46f769c`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longtitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return <p>Searching...</p>;
  }
}
