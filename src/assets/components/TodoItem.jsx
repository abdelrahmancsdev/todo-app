import React from "react";
import s from "../styles/components/todosArea.module.scss";

function TodoItem({ id, name, checked }) {
  return (
    <li id={id} className={s.todoItem} data-checked={checked}>
      <p role="presentation" className={s.todoTitle}>
        <button className={s.checkTodo} />
        <span className={s.todoText}>{name}</span>
      </p>
      <button className={s.deleteItem} />
    </li>
  );
}

export default TodoItem;
