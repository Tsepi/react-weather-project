import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";

export default function Weather(props) {
  const [weather, setWeatherData] = useState({ loaded: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      loaded: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      wind: Math.round(response.data.wind.speed),
      iconURL: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (weather.loaded) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="container weather-app">
            <div className="container content">
              <div className=" container forms">
                <div className="row">
                  <div className="col-9 inputform">
                    <form>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search for a city"
                        id="city-name"
                      />
                    </form>
                  </div>
                  <div className="col-3 buttons">
                    <button
                      type="button"
                      className="btn btn-outline-secondary locate d-none d-md-inline"
                      id="location-dot"
                    >
                      <i className="fa-solid fa-location-dot"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary find"
                      id="search"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>

              <div className="container info">
                <div className="row">
                  <div className="col-4 capital p-3">
                    <h1> {weather.city} </h1>

                    <ul>
                      <li id="day-time">
                        <FormattedDate date={weather.date} />
                      </li>
                      <li className="text-capitalize " id="description">
                        {weather.description}
                      </li>
                    </ul>
                  </div>

                  <div className="col-3 icn">
                    <img
                      className="icon"
                      src={weather.iconURL}
                      alt={weather.description}
                    />
                  </div>

                  <div className="col-5 temp">
                    <h2>
                      <span className="degree">{weather.temperature}</span>{" "}
                      <span className="units">
                        <a href="#0" id="celsius" className="links active">
                          {" "}
                          °C{" "}
                        </a>
                        |
                        <a href="#0" id="fahrenheit" className="links">
                          {" "}
                          °F
                        </a>
                      </span>
                    </h2>

                    <ul>
                      <li id="humidity"> Humidity: {weather.humidity}% </li>
                      <li id="wind-speed">Wind: {weather.wind} km/h</li>
                      <li id="pressure"> Pressure: {weather.pressure} mb</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="container daily">
                <hr />
                <div className="row" id="forecast">
                  {}
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = `7d88e39fad8e3a2f1b2d1076c46f769c`;
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);

    return <p>Loading...</p>;
  }
}
