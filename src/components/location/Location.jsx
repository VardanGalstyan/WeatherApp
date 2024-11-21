import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import ModalQueryLocation from "./ModalLocation";

const Location = ({ city }) => {
  const [show, setShow] = useState(false);

  return (
    <Container id="location" onClick={() => setShow(true)}>
      <Row className="location-container">
        <Col>
          {city && (
            <span className="location-holder">
              <span className="location-city-name">
                {city.name}
                <p className="location-country-badge">{city.country}</p>
              </span>
            </span>
          )}
        </Col>
      </Row>
      <ModalQueryLocation show={show} onHide={() => setShow(false)} />
    </Container>
  );
};

export default Location;
