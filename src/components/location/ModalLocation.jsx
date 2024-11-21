import "./ModalStyle.css";
import { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { locationAtom } from "state";
import { useSetAtom } from "jotai";

const ModalQueryLocation = (props) => {
  const [queryValue, setQueryValue] = useState("");
  const setLocation = useSetAtom(locationAtom);

  const queryOnSubmit = (e) => {
    e.preventDefault();
    setQueryValue("");
    props.onHide();
    setLocation(queryValue);
  };

  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      id="query-modal"
      show={props.show}
      animation
    >
      <Modal.Body>
        <Form onSubmit={queryOnSubmit}>
          <Form.Group>
            <Form.Control
              className="location-query"
              type="text"
              placeholder="Choose a different city..."
              value={queryValue}
              onChange={(e) => setQueryValue(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalQueryLocation;
