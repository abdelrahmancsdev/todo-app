import React from "react";
import s from "../styles/components/todoOptions.module.scss";

function TodoOptions() {
  return (
    <footer id={s.todoOptions}>
      <p id={s.itemsLeft}>1 items left</p>
      <ul id={s.todoFilters}>
        <li role="presentation" className={`${s.filter} ${s.active}`}>
          All
        </li>
        <li role="presentation" className={s.filter}>
          Active
        </li>
        <li role="presentation" className={s.filter}>
          Completed
        </li>
      </ul>
      <button id={s.clearComp}>Clear Completed</button>
    </footer>
  );
}

export default TodoOptions;
