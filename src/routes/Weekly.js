import React, { useEffect } from "react";
import WeatherCard from "../components/WeatherCard";
const Weekly = ({ weather }) => {
  const threeDay = weather.forecast.forecastday.map((el, index) => {
    return (
      <WeatherCard
        Key={index}
        date={el.date}
        avgTemp={el.day.avgtemp_f}
        avgHum={el.day.avghumidity}
        conditionText={el.day.condition.text}
        conditionIcon={el.day.condition.icon}
      />
    );
  });

  console.log(weather);
  return <div className="d-flex justify-content-center mt-5">{threeDay}</div>;
};

export default Weekly;
