import React, { useState, useContext, useReducer, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import StudentContext from "./store/student-context";
import "./Studentform.css";

const defaultStudent = {
  name: "",
  class: "",
  score: "",
};

const studentReducer = (state, action) => {
  if (action.type === "NAME") {
    return { ...state, name: action.name };
  }
  if (action.type === "CLASS") {
    return { ...state, class: action.class };
  }
  if (action.type === "SCORE") {
    return { ...state, score: action.score };
  }
  if (action.type === "EDIT") {
    // console.log(action.single);
    return {
      ...state,
      name: action.single.name,
      class: action.single.class,
      score: action.single.score,
    };
  }
  return defaultStudent;
};

const StudentForm = (props) => {
  const [studentState, dispatchStudent] = useReducer(
    studentReducer,
    defaultStudent
  );

  const studentCtx = useContext(StudentContext);
  const eid = props?.eid;
  const editStudent = studentCtx.items.find((item) => item.id === eid);
  useEffect(() => {
    if (!!eid) {
      dispatchStudent({ type: "EDIT", single: editStudent });
    }
  }, [eid, editStudent]);

  const [validName, setValidName] = useState(true);
  const [validClass, setValidClass] = useState(true);
  const [validScore, setValidScore] = useState(true);

  const nameHandler = (event) => {
    dispatchStudent({ type: "NAME", name: event.target.value });
  };

  const classHandler = (event) => {
    dispatchStudent({ type: "CLASS", class: event.target.value });
  };

  const scoreHandler = (event) => {
    dispatchStudent({ type: "SCORE", score: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(studentState);
    let enteredName = studentState.name;
    let enteredClass = studentState.class;
    let enteredScore = studentState.score;
    let scored = +enteredScore;

    if (enteredName.trim().length === 0) {
      setValidName(false);
      return;
    }
    if (enteredClass.trim().length === 0) {
      setValidClass(false);
      return;
    }

    let myStudents = {
      name: enteredName,
      class: enteredClass,
      score: enteredScore,
    };

    if (!!eid) {
      myStudents = {
        ...myStudents,
        id: eid,
      };
    }
    console.log(enteredScore);
    console.log(typeof enteredScore);

    if (!!eid) {
      enteredScore = "" + enteredScore;
    }

    console.log(enteredScore);
    console.log(typeof enteredScore);

    if (
      enteredScore.trim().length === 0 ||
      props.score === 0 ||
      scored < 0 ||
      scored > 100
    ) {
      setValidScore(false);
      return;
    }

    console.log(myStudents);
    studentCtx.addItem(myStudents);
    props.cancel();
  };

  let grade, result, resultColor, gradeColor;

  if (props.score < 30) {
    grade = "Poor";
    result = "Failed";
    resultColor = "failedresult";
    gradeColor = "red";
  }
  if (props.score > 31 && props.score < 75) {
    grade = "Average";
    result = "Passed";
    resultColor = "passedresult";
    gradeColor = "blue";
  } else if (props.score > 75) {
    grade = "Excellent";
    result = "Passed";
    resultColor = "passedresult";
    gradeColor = "green";
  }

  return (
    <React.Fragment>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>STUDENT NAME*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={nameHandler}
            value={studentState.name}
          />
          <Form.Text className="text-muted">
            {!validName && (
              <p className="text-danger">The name field cannot be empty</p>
            )}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicClass">
          <Form.Label>CLASS*</Form.Label>
          <Form.Control
            type="number"
            step="1"
            min="1"
            max="12"
            placeholder="Enter class"
            onChange={classHandler}
            value={studentState.class}
          />
          <Form.Text className="text-muted">
            {!validClass && (
              <p className="text-danger">Please input values between 1 & 12</p>
            )}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicScore">
          <Form.Label>SCORE*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter class"
            onChange={scoreHandler}
            value={studentState.score}
          />
          <Form.Text className="text-muted">
            {!validScore && (
              <p className="text-danger">Please input values between 0 & 100</p>
            )}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicResult">
          <Form.Label>Result</Form.Label>
          <p>
            <span
              className={`${resultColor} rounded-pill px-2 ${
                !!eid ? "text-white" : ""
              }`}
            >
              {!!eid ? result : "-"}
            </span>
          </p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicGrade">
          <Form.Label>Grade</Form.Label>
          <p>
            <span className={`${gradeColor} rounded-pill px-2 `}>
              {!!eid ? grade : "-"}
            </span>
          </p>
        </Form.Group>
        <Button
          className="float-end"
          style={{ backgroundColor: "#2CA4D8", padding: "6px 16px 6px 16px" }}
          type="submit"
        >
          Submit
        </Button>
        <Button
          style={{ color: "#2CA4D8" }}
          className="cancel mx-3 float-end"
          onClick={props.cancel || props.editCancel}
        >
          Cancel
        </Button>
      </Form>
    </React.Fragment>
  );
};

export default StudentForm;
