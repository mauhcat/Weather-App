import React from "react";

function WeatherDisplay() {
  return (
    <div className="weather-display">
      <h2>
        {weatherData.name}, {weatherData.sys.country}
      </h2>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Weather: {weatherData.weather[0].description}</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
    </div>
  );
}

export default WeatherDisplay;
