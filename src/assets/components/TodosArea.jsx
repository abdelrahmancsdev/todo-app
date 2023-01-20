import React, { useContext, useLayoutEffect } from "react";
import { TodoListContext } from "../../App";
import s from "../styles/components/todosArea.module.scss";
import TodoItem from "./TodoItem";

const todoPlaceholder = [
  { name: "Complete Online JavaScript Course", checked: true },
  { name: "Jog around the park 3x", checked: false },
  { name: "10 minutes meditation", checked: false },
  { name: "Read for 1 hour", checked: false },
  { name: "Pick up groceries", checked: false },
  { name: "Complete Todo App Frontend Mentor", checked: false },
];
function TodosArea() {
  const { todoList, setTodoList } = useContext(TodoListContext);

  useLayoutEffect(() => {
    if (!localStorage.todoList) {
      setTodoList(todoPlaceholder);
      localStorage.setItem("todoList", JSON.stringify(todoPlaceholder));
    } else {
      setTodoList(JSON.parse(localStorage.todoList));
    }
  }, []);

  return (
    <section id={s.todosArea}>
      <ul id={s.todoList}>
        {todoList.map((todo, i) => (
          <TodoItem
            key={i}
            id={i + 1}
            name={todo.name}
            checked={todo.checked}
          />
        ))}
      </ul>
    </section>
  );
}

export default TodosArea;
