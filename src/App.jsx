import React, { useRef, useState } from "react";
import Search from "./components/Search";
import WeatherDetails from "./components/WeatherDetails";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const dataRef = useRef();

  // Callback to update weatherData in App
  const handleWeatherData = (data) => {
    setWeatherData(data);
  };

  return (
    <>
      <Search ref={dataRef} onDataFetch={handleWeatherData} />
      <WeatherDetails WeatherData={weatherData} />
    </>
  );
};

export default App;
