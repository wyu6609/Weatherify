import React, { useEffect } from "react";
import WeatherCard from "../components/WeatherCard";
const Weekly = ({ weather }) => {
  console.log(weather.forecast.forecastday);
  const threeDay = weather.forecast.forecastday.map((el) => {
    return (
      <WeatherCard
        date={el.date}
        avgTemp={el.day.avgtemp_f}
        avgHum={el.day.avghumidity}
        conditionText={el.day.condition.text}
        conditionIcon={el.day.condition.icon}
      />
    );
  });

  console.log(weather);
  return <div>{threeDay}</div>;
};

export default Weekly;
