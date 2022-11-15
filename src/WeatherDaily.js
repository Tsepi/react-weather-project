import axios from "axios";
import React from "react";

import "./WeatherDaily.css";

export default function WeatherDaily(props) {
  function handeleResponse(response) {
    console.log(response.data);
  }
  let latitude = props.coordinates.lat;
  let longtitude = props.coordinates.lon;
  let apiKey = `7d88e39fad8e3a2f1b2d1076c46f769c`;
  let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longtitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handeleResponse);

  return (
    <div className="WeatherDaily">
      <div className="container daily">
        <div className="row ">
          <div className="col">
            <div className="daily-forecast">Wed</div>
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
              alt=" sunny "
              width="62px"
            />
            <div className="temperatures">
              <span className="temperature-max"> 23° </span>
              <span className="temperature-min"> 15° </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
