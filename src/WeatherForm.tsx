import { useState } from "react";

export default function WeatherForm({ getWeather }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault;
    if (city) {
      getWeather(city);
      setCity("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter City"
      />
      <button type="submit">Get Weather</button>
    </form>
  );
}
