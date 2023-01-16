import React from "react";
import s from "../styles/components/todosArea.module.scss";

function TodosArea() {
  return (
    <section id={s.todosArea}>
      <ul id={s.todoList}>
        <li className={s.todoItem}>
          <p role="presentation" className={s.todoTitle}>
            <button className={s.checkTodo} />
            <span className={s.todoText}>Test</span>
          </p>
          <button className={s.deleteItem} />
        </li>
      </ul>
    </section>
  );
}

export default TodosArea;
