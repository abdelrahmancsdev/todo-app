import React, { useContext } from "react";
import { TodoListContext } from "../../App";
import s from "../styles/components/todosArea.module.scss";

function TodoItem({ id, name, checked }) {
  const { todoList, setTodoList } = useContext(TodoListContext);
  const checkTodo = (e) => {
    const newList = todoList.map((todo, i) => {
      if (+e.target.parentElement.parentElement.id === i + 1) {
        return { name: todo.name, checked: !todo.checked };
      }
      return todo;
    });
    setTodoList(newList);
    localStorage.todoList = JSON.stringify(newList);
  };
  const deleteTodo = (e) => {
    const newList = todoList.filter(
      (todo, i) => +e.target.parentElement.id !== i + 1
    );
    setTodoList(newList);
    localStorage.todoList = JSON.stringify(newList);
  };
  return (
    <li id={id} className={s.todoItem} data-checked={checked}>
      <p role="presentation" className={s.todoTitle} onClick={checkTodo}>
        <button className={s.checkTodo} />
        <span className={s.todoText}>{name}</span>
      </p>
      <button className={s.deleteItem} onClick={deleteTodo} />
    </li>
  );
}

export default TodoItem;
