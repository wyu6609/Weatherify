import React from "react";
import { Card } from "react-bootstrap";

const WeatherCard = () => {
  return (
    <Card style={{ width: "23rem" }} className="shadow-lg">
      <Card.Header className="text-center">
        <Card.Title>
          {weather?.location.name}, {weather?.location.region}
        </Card.Title>
        <span className="d-flex justify-content-center">
          <p>{weather?.current.condition.text}</p>
          <img src={weather?.current.condition.icon} />
        </span>
        <Card.Title>
          {weather?.location.lat}, {weather?.location.lon}
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>feels like: {weather?.current.feelslike_f} F</Card.Text>
        <Card.Text>humidity: {weather?.current.humidity}% </Card.Text>
        <Card.Text>
          wind: {weather?.current.wind_dir} {weather?.current.wind_mph} mph
        </Card.Text>

        <Card.Text>visibility: {weather?.current.vis_miles} miles</Card.Text>
        <Card.Text
          className="position-absolute bottom-0 end-0 text-muted"
          style={{ fontSize: 10 }}
        >
          updated: {weather?.current.last_updated}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;
