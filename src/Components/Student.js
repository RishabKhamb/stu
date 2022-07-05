import React from "react";
import { Table } from "react-bootstrap";
import "./Student.css";
import StudentList from "./StudentList";

const Student = (props) => {
  let inputResult;
  let classList = props.list.map((data, index) => {
    if (data.score < 30) {
      inputResult = "Failed";
    }
    if (data.score > 31 && data.score < 75) {
      inputResult = "Passed";
    } else if (data.score > 75) {
      inputResult = "Passed";
    }
    return (
      <StudentList
        num={index + 1}
        name={data.name}
        class={data.class}
        result={data.result}
        score={data.score}
        grade={inputResult}
        key={data.id}
        id={data.id}
      />
    );
  });
  return (
    <Table
      className="table table-striped"
      style={{ border: " 2px solid #f1f1f1" }}
    >
      <thead>
        <tr>
          <th>No.</th>
          <th>Student Name</th>
          <th>Class</th>
          <th>Result</th>
          <th>Score</th>
          <th>Grade</th>
        </tr>
      </thead>
      {classList}
    </Table>
  );
};

export default Student;
