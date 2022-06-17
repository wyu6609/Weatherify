import React from "react";
import Card from "react-bootstrap/Card";

const Today = ({ weather, loading }) => {
  console.log(loading);
  return (
    <div className="d-flex justify-content-center mt-5 ">
      <Card style={{ width: "18rem" }} className="shadow">
        <Card.Header>
          <Card.Title>
            {weather?.location.name}, {weather?.location.region}
          </Card.Title>
          <span>
            <img src="" />
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
        </Card.Body>
      </Card>
    </div>
  );
};

export default Today;
