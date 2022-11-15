import React, { useState } from "react";
import axios from "axios";

import WeatherForecast from "./WeatherForecast";
import WeatherDaily from "./WeatherDaily";
import Footer from "./Footer";

import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeatherData] = useState({ loaded: false });
  const apiKey = `7d88e39fad8e3a2f1b2d1076c46f769c`;

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      loaded: true,
      city: response.data.name,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      wind: Math.round(response.data.wind.speed),
      iconURL: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function search() {
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function changeCity(event) {
    setCity(event.target.value);
  }

  function showPosition(position) {
    console.log(position);
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    let geoUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(geoUrl).then(handleResponse);
  }
  function fetchLocation(event) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  if (weather.loaded) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="container frame">
            <div className="container content">
              <div className=" container forms">
                <div className="row">
                  <div className="col-9 inputform">
                    <form onSubmit={handleSubmit}>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search for a city"
                        onChange={changeCity}
                      />
                    </form>
                  </div>
                  <div className="col-3 buttons">
                    <button
                      type="button"
                      className="btn btn-outline-secondary locate d-none d-md-inline"
                      onClick={fetchLocation}
                    >
                      <i className="fa-solid fa-location-dot"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary find"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
              <WeatherForecast data={weather} />
              <WeatherDaily coordinates={weather.coordinates} />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return <p>Loading...</p>;
  }
}
