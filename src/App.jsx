import React, { useState } from "react";
import AddTodo from "./assets/components/AddTodo";
import Header from "./assets/components/Header";
import TodoOptions from "./assets/components/TodoOptions";
import TodosArea from "./assets/components/TodosArea";
import "./assets/styles/core/main.scss";

function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <div id="appContainer" className={theme}>
      <div id="app">
        <Header />
        <AddTodo />
        <TodosArea />
        <TodoOptions />
      </div>
    </div>
  );
}

export default App;
