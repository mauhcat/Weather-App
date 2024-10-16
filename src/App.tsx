import React, { useState } from "react";
import WeatherForm from "./WeatherForm";
import WeatherDisplay from "./WeatherDisplay";
import "./Style.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeather = async (city) => {
    setLoading(true); // Set loading to true when we start fetching
    setError(""); // Clear any previous error

    try {
      const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeather API key
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      if (!response.ok) throw new Error("City not found");

      const data = await response.json();
      setWeatherData(data); // Set the weather data we receive from the API
    } catch (err) {
      setError(err.message);
    }

    setLoading(false); // Stop loading when the request is finished
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherForm getWeather={getWeather} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {weatherData && <WeatherDisplay weatherData={weatherData} />}
    </div>
  );
}

export default App;
