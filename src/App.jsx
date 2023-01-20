import React, {
  useState,
  useLayoutEffect,
  createContext,
  useMemo,
} from "react";
import AddTodo from "./assets/components/AddTodo";
import Header from "./assets/components/Header";
import TodoOptions from "./assets/components/TodoOptions";
import TodosArea from "./assets/components/TodosArea";
import "./assets/styles/core/main.scss";

export const HeaderContext = createContext(null);
export const TodoListContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");
  const [running, setRunning] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const themeItems = useMemo(() => ({ theme, setTheme }), [theme]);
  const todoItems = useMemo(() => ({ todoList, setTodoList }), [todoList]);

  useLayoutEffect(() => {
    if (!running) {
      if (localStorage.theme) {
        setTheme(localStorage.theme);
        setRunning(true);
      } else {
        localStorage.theme = theme;
        setRunning(true);
      }
    }
  }, [theme, running]);
  return (
    <div id="appContainer" className={theme}>
      <div id="app">
        <HeaderContext.Provider value={themeItems}>
          <Header />
        </HeaderContext.Provider>
        <TodoListContext.Provider value={todoItems}>
          <AddTodo />
          <div id="todosContainer">
            <TodosArea />
            <TodoOptions />
          </div>
        </TodoListContext.Provider>
        <p id="note">Drag and drop to reorder list</p>
      </div>
    </div>
  );
}

export default App;
