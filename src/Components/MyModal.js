import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
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
        <Modal.Body>Are you sure you want to delete this?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={removeHandler}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyModal;
