import React from "react";

function AddTodo() {
  return (
    <div id="createTodo">
      <div id="addTodo" />
      <input
        type="text"
        name="todoInput"
        id="todoInput"
        placeholder="Create a new todo..."
      />
    </div>
  );
}

export default AddTodo;
