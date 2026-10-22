// import './Weather.css'
import { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  // useEffect(() => {
  //   fetch(
  //     "https://api.open-meteo.com/v1/forecast?latitude=30.3165&longitude=78.0322&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m",
  //   )
  //     .then((response) => response.json())

  //     .then((data) => {
  //       setWeather(data.current);
  //     });
  // }, []);

  // if (!weather) {
  //   return <h2>Loading...</h2>;
  // }

  async function searchWeather() {
    // 1. Get city coordinates
    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`,
    );

    // 2. Convert response to JSON
    const data = await response.json();

    // 3. Get coordinates
    const latitude = data.results[0].latitude;
    const longitude = data.results[0].longitude;

    // 4. Get weather using coordinates
    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m`,
    );

    // 5. Convert weather response to JSON
    const weatherData = await weatherResponse.json();

    // 6. Store ONLY current weather in state
    setWeather(weatherData.current);
  }

  return (
    <div>
      <div className="city-search bg-blue-100 p-6  text-center">
        <input
          type="text"
          placeholder="Enter your city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="bg-sky-50  p-4 rounded-sm "
        />

        <button onClick={searchWeather} className="bg-sky-100 rounded-sm hover:bg-sky-500 p-4 ml-4">Search</button>
      </div>

      {weather && (
        <div className="weather-card bg-blue-100 mt-2 ">
          {" "}
          <h1 className="text-lg">{city}</h1> <h2> {weather.temperature_2m}°C </h2>{" "}
          <p> 💧 Humidity: {weather.relative_humidity_2m}% </p>{" "}
          <p> 💨 Wind Speed: {weather.wind_speed_10m} km/h </p>{" "}
          <p> 🌤️ Weather Code: {weather.weather_code} </p>{" "}
        </div>
      )}


 

    </div>
  );
};

export default Weather;
