import React from "react";

export default function WeatherDailyForecast(props) {
  let iconURL = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
  console.log(props.data);
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="daily-forecast">{day()}</div>
      <img src={iconURL} alt=" sunny " width="62px" />
      <div className="temperatures">
        <span className="temperature-max">{maxTemp()}</span>
        <span className="temperature-min">{minTemp()} </span>
      </div>
    </div>
  );
}
