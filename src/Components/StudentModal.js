import React from "react";

import Modal from "react-bootstrap/Modal";
import StudentForm from "./StudentForm";
const StudentModal = (props) => {
  return (
    <React.Fragment>
      <Modal
        className="mt-5"
        show={props.addShow || props.show}
        onHide={props.cancel || props.editCancel}
      >
        <Modal.Header>
          <Modal.Title>
            {props.eid ? "Edit student" : "Add student"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <StudentForm
            cancel={props.cancel || props.editCancel}
            eid={props.eid ?? null}
            score={props.score}
          />
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default StudentModal;
