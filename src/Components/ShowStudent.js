import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import StudentModal from "./StudentModal";
const ShowStudent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
    console.log("clicked handle show");
  };

  return (
    <div>
      <StudentModal>
        <Button
          className="px-4  float-end mb-4"
          variant="primary"
          onClick={handleShow}
          hide={handleClose}
          show={show}
        >
          + Add
        </Button>
      </StudentModal>
    </div>
  );
};

export default ShowStudent;
