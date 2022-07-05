import React, { useState } from "react";
import StudentContext from "./student-context";

const DUMMY_DATA = [
  {
    name: "Rishab",
    class: "11",
    score: 78,
    id: "q1",
  },
  {
    name: "Elon",
    class: "10",
    score: 60,
    id: "q2",
  },
  {
    name: "Tony",
    class: "12",
    score: 15,
    id: "q3",
  },
];
const StudentContextProvider = (props) => {
  const [child, setChild] = useState(DUMMY_DATA);
  const [show, setShow] = useState(false);

  const addItemHandler = (students) => {
    const eid = students.id;
    if (!!eid) {
      const newState = child.map((obj) => {
        if (obj.id === eid) {
          return {
            ...obj,
            name: students.name,
            class: students.class,
            score: students.score,
          };
        }
        return obj;
      });

      setChild(newState);
    } else {
      const newStudent = {
        ...students,
        id: Math.random().toString() * 100,
      };
      setChild((prevData) => {
        return [...prevData, newStudent];
      });
    }
  };

  const removeItemHandler = (id) => {
    let myStudents;
    myStudents = child.filter((item) => {
      return item.id !== id;
    });
    setChild(myStudents);
  };

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const childrenContext = {
    items: child,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    openModal: handleShow,
    closeModal: handleClose,
    modalControl: show,
  };
  return (
    <StudentContext.Provider value={childrenContext}>
      {props.children}
    </StudentContext.Provider>
  );
};

export default StudentContextProvider;
