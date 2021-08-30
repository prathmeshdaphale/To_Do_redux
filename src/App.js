import React from "react";

import Todo from "./redux/Todo";
import Todoprint from "./redux/Todoprint";
import "./todo.css";

export default function App() {
  return (
    <div className="full">
      <div className="container">
        <div className="header"> To Do List</div>
        <div>
          <Todo />
        </div>
        <div>
          <Todoprint />
        </div>
      </div>
    </div>
  );
}
