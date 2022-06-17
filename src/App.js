import react, { useState, useEffect } from "react";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";

import Today from "./routes/Today";
import Weekly from "./routes/Weekly";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const apiKey = "f270ab85b7df432a894221127221406";
const city = "new york";
const lat = "40.593081";
const lon = "-73.974021";
const zipCode = "11223";
function App() {
  //set loading
  const [loading, setLoading] = useState(false);
  //Weather JSON state
  const [weather, setWeather] = useState(null);
  //onload get geolocation

  //on load fetch weather
  useEffect(() => {
    fetchWeather();
  }, []);

  //fetch weather
  const fetchWeather = async () => {
    try {
      const resp = await axios.get(
        `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${zipCode}&days=10&aqi=no&alerts=no`
      );
      console.log(resp.data);
      setWeather(resp.data);
      setLoading(true);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };

  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route
          path="/"
          element={<Today weather={weather} loading={loading} />}
        />
        <Route
          path="/weekly"
          element={<Weekly weather={weather} loading={loading} />}
        />
      </Routes>
    </>
  );
}

export default App;
