import { useState } from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { searchQueryAction } from '../../redux/actions';
import '../../App.css';

function Search() {
  const dispatch = useDispatch();
  const [queryValue, setQueryValue] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(searchQueryAction(queryValue));
    setQueryValue('');
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
