import React from "react";
import axios from "axios";
import "./Weather.css";
import "./App.css";

export default function Weather(props) {
  let weatherData = {
    city: "Houston",
    temperature: 93,
    date: "Sunday 6:00 PM",
    imgUrl:
      "https://cdn0.iconfinder.com/data/icons/weather-forecast-17/128/forecast-weather_rain-heavy-drizzle-512.png",
    description: "Severe Thunderstoms",
    humidity: 80,
    wind: 5,
  };

  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}°`
    );
  }
  return (
    <div className="Weather">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="City Name"
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <div className="overview">
        <h1>{weatherData.city}</h1>
        <ul className="header-info">
          <li>Last updated: {weatherData.date}</li>
          <li>{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <div className="float-left">
              <img src={weatherData.imgUrl} alt={weatherData.description} />
              <strong>{weatherData.temperature}</strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul className="list-info">
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
    
}
