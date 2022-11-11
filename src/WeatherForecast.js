import React from "react";
import FormattedDate from "./FormattedDate";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <div className="container info">
        <div className="row">
          <div className="col-4 capital p-3">
            <h1> {props.data.city} </h1>

            <ul>
              <li>
                <FormattedDate date={props.data.date} />
              </li>
              <li className="text-capitalize">{props.data.description}</li>
            </ul>
          </div>

          <div className="col-3 icn">
            <img
              className="icon"
              src={props.data.iconURL}
              alt={props.data.description}
            />
          </div>

          <div className="col-5 temp">
            <h2>
              <span className="degree">{props.data.temperature}</span>{" "}
              <span className="units">
                <a href="#0" className="links active">
                  {" "}
                  °C{" "}
                </a>
                |
                <a href="#0" className="links">
                  {" "}
                  °F
                </a>
              </span>
            </h2>

            <ul>
              <li> Humidity: {props.data.humidity}% </li>
              <li>Wind: {props.data.wind} km/h</li>
              <li> Pressure: {props.data.pressure} mb</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container daily">
        <hr />
        <div className="row">{}</div>
        <hr />
      </div>
    </div>
  );
}
