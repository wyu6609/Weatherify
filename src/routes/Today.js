import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const Today = ({ weather, loading }) => {
  return (
    <div className="d-flex justify-content-center mt-5 ">
      <Card style={{ width: "18rem" }} className="shadow">
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
    </div>
  );
};

export default Today;
