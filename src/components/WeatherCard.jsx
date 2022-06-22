import React from "react";
import { Card } from "react-bootstrap";

const WeatherCard = (props) => {
  const { date, avgTemp, avgHum, conditionText, conditionIcon } = props;
  return (
    <Card style={{ width: "23rem" }} className="shadow-lg">
      <Card.Header className="text-center">
        <Card.Title>{date}</Card.Title>
        <span className="d-flex justify-content-center">
          <p>{conditionText}</p>
          <img src={conditionIcon} />
        </span>
        <Card.Title>title</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>feels like: {avgTemp} F</Card.Text>
        <Card.Text>humidity: {avgHum}% </Card.Text>
        <Card.Text>wind: mph</Card.Text>

        <Card.Text>visibility: miles</Card.Text>
        <Card.Text
          className="position-absolute bottom-0 end-0 text-muted"
          style={{ fontSize: 10 }}
        ></Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;
