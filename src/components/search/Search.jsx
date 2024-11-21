import { useSetAtom } from "jotai";
import { useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import "../../App.css";
import { locationAtom } from "../../state";

function Search() {
  const setLocation = useSetAtom(locationAtom);
  const [queryValue, setQueryValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setLocation(queryValue);
  };

  return (
    <Container fluid id="query-box">
      <Row className="query-box-container">
        <Form onSubmit={onSubmit}>
          <Form.Group>
            <Form.Control
              className="location-query"
              type="text"
              placeholder="Select your city..."
              value={queryValue}
              onChange={(e) => setQueryValue(e.target.value)}
            />
            <Button type="submit" onSubmit={onSubmit}></Button>
          </Form.Group>
        </Form>
      </Row>
      <Row>
        <span className="query-box-background-text">WEATHER</span>
      </Row>
    </Container>
  );
}

export default Search;
