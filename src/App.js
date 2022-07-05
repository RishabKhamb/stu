import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import "./App.css";
import Student from "./Components/Student";
import "bootstrap/dist/css/bootstrap.min.css";
import StudentModal from "./Components/StudentModal";
import StudentContext from "./Components/store/student-context";
function App() {
  const studentCtx = useContext(StudentContext);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
    <div className="container-fluid container-md mt-4">
      <div className="row">
        <div className="col-12">
          <h3 className="d-inline-block">Students</h3>

          <Button
            className="float-end mb-4"
            style={{ backgroundColor: "#2CA4D8", padding: "8px 32px 8px 32px" }}
            onClick={handleShow}
          >
            + Add
          </Button>
          <StudentModal addShow={show} cancel={handleClose}></StudentModal>
        </div>
        <div className="col">
          {studentCtx.items.length === 0 && <h1>The list if empty</h1>}
          {studentCtx.items.length >= 1 && <Student list={studentCtx.items} />}
        </div>
      </div>
    </div>
  );
}

export default App;
