import React from "react";


import "./WeatherDaily.css";


export default function WeatherDaily() {
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
