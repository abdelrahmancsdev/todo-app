import React from "react";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Todo</h1>
        <div className="modeToggler">Dark</div>
      </header>
      <div id="createTodo">
        <div id="addTodo" />
        <input
          type="text"
          name="todoInput"
          id="todoInput"
          placeholder="Create a new todo..."
        />
      </div>
      <section id="todosArea">
        <ul className="todosList">
          <li>
            <p role="presentation" className="todoItem">
              Test
            </p>
            <button className="deleteItem">Delete</button>
          </li>
        </ul>
      </section>
      <footer id="todoOptions">
        <p id="itemsLeft">1 items left</p>
        <ul id="todoFilters">
          <li role="presentation" className="filter active">
            All
          </li>
          <li role="presentation" className="filter">
            Active
          </li>
          <li role="presentation" className="filter">
            Completed
          </li>
        </ul>
        <button>Clear Completed</button>
      </footer>
      <p id="note">Drag and drop to reorder list</p>
    </div>
  );
}

export default App;
