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

  const resultColor = `${props.score < 30 ? "bg-danger" : "passcolor"}`;

  let grade, result, gradeColor;
  if (props.score < 30) {
    grade = "Poor";
    result = "Failed";
    gradeColor = "red";
  }
  if (props.score > 31 && props.score < 75) {
    grade = "Average";
    result = "Passed";
    gradeColor = "blue";
  } else if (props.score > 75) {
    grade = "Excellent";
    result = "Passed";
    gradeColor = "green";
  }
  let ordinal;
  switch (props.class) {
    case "1":
      ordinal = "st";
      break;
    case "2":
      ordinal = "nd";
      break;
    case "3":
      ordinal = "rd";
      break;
    default:
      ordinal = "th";
  }
  return (
    <tbody className="showhim">
      <tr>
        <td>{props.num}</td>
        <td>{props.name}</td>
        <td>
          {props.class}
          {ordinal}
        </td>
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
            <MyModal
              ordinal={ordinal}
              show
              id={props.id}
              name={props.name}
              class={props.class}
            />
          </span>
        </td>
      </tr>
    </tbody>
  );
};

export default StudentList;
