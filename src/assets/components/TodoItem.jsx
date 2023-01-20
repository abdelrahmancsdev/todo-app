import React, { useContext } from "react";
import { TodoListContext } from "../../App";
import s from "../styles/components/todosArea.module.scss";

function TodoItem({ id, name, checked }) {
  const { todoList, setTodoList } = useContext(TodoListContext);
  const checkTodo = (e) => {
    const newList = todoList.map((todo, i) => {
      if (+e.target.parentElement.parentElement.id === i + 1) {
        console.log("haha");
        return { name: todo.name, checked: !todo.checked };
      }
      // console.log(e.target.parentElement.parentElement.id == i + 1);
      return todo;
    });
    setTodoList(newList);
    localStorage.todoList = JSON.stringify(newList);
  };
  return (
    <li id={id} className={s.todoItem} data-checked={checked}>
      <p role="presentation" className={s.todoTitle} onClick={checkTodo}>
        <button className={s.checkTodo} />
        <span className={s.todoText}>{name}</span>
      </p>
      <button className={s.deleteItem} />
    </li>
  );
}

export default TodoItem;
