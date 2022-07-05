import React from "react";

const StudentContext = React.createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  openModal: (id) => {},
  closeModal: () => {},
  modalControl: false,
});

export default StudentContext;
