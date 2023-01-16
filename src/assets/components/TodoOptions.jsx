import React from "react";
import s from "../styles/components/todoOptions.module.scss";

function TodoOptions() {
  return (
    <footer id={s.todoOptions}>
      <p id="itemsLeft">1 items left</p>
      <ul id="todoFilters">
        <li role="presentation" className="filter active">
          All
        </li>
        <li role="presentation" className="filter">
          Active
        </li>
        <li role="presentation" className="filter">
          Completed
        </li>
      </ul>
      <button>Clear Completed</button>
    </footer>
  );
}

export default TodoOptions;
