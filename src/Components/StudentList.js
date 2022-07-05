import React, { useState } from "react";
import MyModal from "./MyModal";
import "./StudentList.css";
import StudentModal from "./StudentModal";
const StudentList = (props) => {
  const [eid, setEid] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const resultColor = `${props.score < 30 ? "bg-danger" : "bg-primary"}`;

  let grade, result, gradeColor;
  if (props.score < 30) {
    grade = "Poor";
    result = "Failed";
    gradeColor = "text-danger";
  }
  if (props.score > 31 && props.score < 75) {
    grade = "Average";
    result = "Passed";
    gradeColor = "text-primary";
  } else if (props.score > 75) {
    grade = "Excellent";
    result = "Passed";
    gradeColor = "text-success";
  }
  return (
    <tbody className="showhim">
      <tr>
        <td>{props.num}</td>
        <td>{props.name}</td>
        <td>{props.class}</td>
        <td>
          <span className={`${resultColor} rounded-pill px-2 text-white`}>
            {result}
          </span>
        </td>
        <td>{props.score}/100</td>
        <td className={`${gradeColor}`}>{grade}</td>
        <td>
          <span className="showme">
            <i
              onClick={() => {
                setEid(props.id);
                setShow(true);
                // studentCtx.editForm(props.id);
              }}
              className="text-primary me-3 fa-solid fa-flag fa-pen-to-square"
            ></i>
            <StudentModal
              show={show}
              eid={eid}
              editCancel={handleClose}
              score={props.score}
            ></StudentModal>
            {/* <i className="text-primary fa-solid fa-heart fa-trash"></i> */}
            <MyModal show id={props.id} />
          </span>
        </td>
      </tr>
    </tbody>
  );
};

export default StudentList;
