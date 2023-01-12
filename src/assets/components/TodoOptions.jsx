import React from "react";

function TodoOptions() {
  return (
    <>
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
    </>
  );
}

export default TodoOptions;
