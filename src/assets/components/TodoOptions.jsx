import React, { useContext, useEffect, useRef } from "react";
import { TodoListContext } from "../../App";
import s from "../styles/components/todoOptions.module.scss";

function TodoOptions() {
  const { todoList } = useContext(TodoListContext);
  const todoCount = useRef(null);
  useEffect(() => {
    const newList = todoList.filter((todo) => !todo.checked);
    todoCount.current.textContent = newList.length;
  }, [todoList]);
  return (
    <footer id={s.todoOptions}>
      <p id={s.itemsLeft}>
        <span id={s.todoCount} ref={todoCount} />
        items left
      </p>
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
