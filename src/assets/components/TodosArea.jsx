import React, { useContext, useLayoutEffect } from "react";
import { TodoListContext, ViewContext } from "../../App";
import s from "../styles/components/todosArea.module.scss";
import TodoItem from "./TodoItem";

const todoPlaceholder = [
  { name: "Complete Online JavaScript Course", checked: true, id: 1 },
  { name: "Jog around the park 3x", checked: false, id: 2 },
  { name: "10 minutes meditation", checked: false, id: 3 },
  { name: "Read for 1 hour", checked: false, id: 4 },
  { name: "Pick up groceries", checked: false, id: 5 },
  { name: "Complete Todo App Frontend Mentor", checked: false, id: 6 },
];
function TodosArea() {
  const { todoList, setTodoList } = useContext(TodoListContext);
  const { view } = useContext(ViewContext);
  useLayoutEffect(() => {
    if (!localStorage.todoList) {
      setTodoList(todoPlaceholder);
      localStorage.setItem("todoList", JSON.stringify(todoPlaceholder));
    } else {
      setTodoList(JSON.parse(localStorage.todoList));
    }
  }, []);

  if (view === "all") {
    return (
      <section id={s.todosArea}>
        <ul id={s.todoList}>
          {todoList.map((todo, i) => (
            <TodoItem
              key={i}
              id={todo.id}
              name={todo.name}
              checked={todo.checked}
            />
          ))}
        </ul>
      </section>
    );
  }
  if (view === "active") {
    return (
      <section id={s.todosArea}>
        <ul id={s.todoList}>
          {todoList
            .filter((todo) => !todo.checked)
            .map((todo, i) => (
              <TodoItem
                key={i}
                id={todo.id}
                name={todo.name}
                checked={todo.checked}
              />
            ))}
        </ul>
      </section>
    );
  }
  if (view === "completed") {
    return (
      <section id={s.todosArea}>
        <ul id={s.todoList}>
          {todoList
            .filter((todo) => todo.checked)
            .map((todo, i) => (
              <TodoItem
                key={i}
                id={todo.id}
                name={todo.name}
                checked={todo.checked}
              />
            ))}
        </ul>
      </section>
    );
  }
}

export default TodosArea;
