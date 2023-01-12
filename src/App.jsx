import React from "react";
import AddTodo from "./assets/components/AddTodo";
import Header from "./assets/components/Header";
import TodoOptions from "./assets/components/TodoOptions";
import TodosArea from "./assets/components/TodosArea";

function App() {
  return (
    <div className="App">
      <Header />
      <AddTodo />
      <TodosArea />
      <TodoOptions />
    </div>
  );
}

export default App;
