import react, { useState, useEffect } from "react";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import { Spinner } from "react-bootstrap";

import Today from "./routes/Today";
import Weekly from "./routes/Weekly";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const apiKey = "f270ab85b7df432a894221127221406";

function App() {
  // set longitude and latitude coordinates
  const [location, setLocation] = useState(null);

  //set loading
  const [loading, setLoading] = useState(false);
  //Weather JSON state
  const [weather, setWeather] = useState(null);
  //onload get geolocation

  useEffect(() => {
    // get geolocation on page load
    checkGeoLocation();
  }, []);
  //check browser geo location function
  function checkGeoLocation() {
    if (navigator.geolocation) {
      success();
    } else {
      handleLocationError(false);
    }
  }

  function handleLocationError(browserHasGeolocation) {
    let errorMessage = browserHasGeolocation
      ? "ERROR: YOUR GEOLOCATION IS DISABLED "
      : "ERROR: YOUR BROWSER DOESN'T SUPPORT GEOLOCATION SERVICE.";
    alert(`${errorMessage} => Showing default city weather (NYC) instead`);
    // setLatitude(40.7127837);
    // setLongitude(-74.0059413);
    setLocation(`40.7127837,-74.0059413`);
  }

  function success() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation(`${position.coords.latitude},${position.coords.longitude}`);

        alert(
          `Geolocation success! Your coordinates are ${position.coords.latitude}, ${position.coords.longitude}`
        );
      },
      () => {
        handleLocationError(true);
      }
    );
  }
  //on load fetch weather
  useEffect(() => {
    fetchWeather();
  }, [location]);

  //fetch weather
  const fetchWeather = async () => {
    try {
      const resp = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=10&aqi=no&alerts=no`
      );
      console.log(resp.data);
      setWeather(resp.data);
      setTimeout(() => {
        setLoading(true);
      }, 1000);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };

  return (
    <>
      <NavbarComponent setLocation={setLocation} />
      {loading ? (
        <Routes>
          <Route path="/" element={<Today weather={weather} />} />
          <Route path="/weekly" element={<Weekly weather={weather} />} />
        </Routes>
      ) : (
        <div className="d-flex align-items-center my-auto">
          <Spinner
            style={{ width: "10", height: "10" }}
            animation="grow"
            variant="success"
            className="mx-auto"
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
    </>
  );
}

export default App;
