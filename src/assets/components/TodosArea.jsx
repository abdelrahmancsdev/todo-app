import React from "react";

function TodosArea() {
  return (
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
  );
}

export default TodosArea;
