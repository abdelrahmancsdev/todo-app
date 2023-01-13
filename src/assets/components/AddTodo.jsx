import React from "react";
import s from "../styles/components/addTodos.module.scss";

function AddTodo() {
  return (
    <div id={s.createTodo}>
      <div id="addTodo" />
      <input
        type="text"
        name="todoInput"
        id={s.todoInput}
        placeholder="Create a new todo..."
      />
    </div>
  );
}

export default AddTodo;
