import React, { useState, useContext } from "react";
import { TodoListContext } from "../../App";
import s from "../styles/components/addTodos.module.scss";

function AddTodo() {
  const { todoList, setTodoList } = useContext(TodoListContext);
  const [todo, setTodo] = useState("");
  const todoInput = (e) => {
    setTodo(e.target.value);
  };
  const addTodoItem = () => {
    if (todo !== "") {
      const newList = [...todoList, { name: todo, checked: false }];
      setTodoList(newList);
      setTodo("");
      localStorage.todoList = JSON.stringify(newList);
    }
  };
  const EnterKey = (e) => {
    if (e.key === "Enter") {
      addTodoItem();
    }
  };
  return (
    <div id={s.addTodo}>
      <button id={s.createTodo} onClick={addTodoItem} />
      <input
        type="text"
        name="todoInput"
        id={s.todoInput}
        placeholder="Create a new todo..."
        value={todo}
        onChange={todoInput}
        onKeyDown={EnterKey}
      />
    </div>
  );
}

export default AddTodo;
