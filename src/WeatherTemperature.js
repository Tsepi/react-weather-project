import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="Temperature">
        <span className="degree">{Math.round(props.celsius)}</span>{" "}
        <span className="units">
          <a href="#0" className="links active">
            {" "}
            °C{" "}
          </a>
          |
          <a href="#0" className="links" onClick={showFahrenheit}>
            {" "}
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="Temperature">
        <span className="degree">{Math.round(fahrenheit)}</span>{" "}
        <span className="units">
          <a href="#0" className="links " onClick={showCelsius}>
            {" "}
            °C{" "}
          </a>
          |
          <a href="#0" className="links active">
            {" "}
            °F
          </a>
        </span>
      </div>
    );
  }
}
