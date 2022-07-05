import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import StudentContext from "./store/student-context";

const MyModal = (props) => {
  const studentCtx = useContext(StudentContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const removeHandler = () => {
    // console.log(props.id);
    studentCtx.removeItem(props.id);
    handleClose();
  };

  return (
    <>
      <i
        variant="primary"
        onClick={handleShow}
        className="text-primary fa-solid fa-heart fa-trash"
      ></i>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Remove student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>
              Are you sure you want to remove the current student from the list?
            </Form.Label>
            <Form.Group className="mb-3">
              <Form.Text className="text-muted">STUDENT NAME</Form.Text>
              <p>{props.name}</p>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Text className="text-muted">CLASS</Form.Text>
              <p>
                {props.class}
                {props.ordinal}
              </p>
            </Form.Group>
          </Form>
          {/* Are you sure you want to delete this? */}
          {/* {props.name} {props.class} */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" onClick={handleClose}>
            Close
          </Button>
          <Button
            style={{ background: "#f24643" }}
            className="px-4"
            onClick={removeHandler}
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyModal;
