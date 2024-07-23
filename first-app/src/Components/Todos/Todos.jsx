import { useState } from "react";
import TodoItem from "./TodoItem/TodoItem";
import AddTodo from "./AddTodo/AddTodo";

let INITIAL_TODOS = [
  { id: "t001", label: "pot the plants", status: "pending" },
  { id: "t002", label: "buy the pulses", status: "completed" },
  { id: "t003", label: "iron the jeans", status: "pending" },
  { id: "t004", label: "renew car insurance", status: "completed" },
  { id: "t005", label: "buy T-shirts", status: "pending" },
];

function Todos() {
  const [todos, setTodos] = useState(INITIAL_TODOS);

  const onAddNewTodo = (label) => {
    let newTodo = {
      id: "t00" + (todos.length + 1),
      label: label,
      status: "pending",
    };
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  return (
    <>
      <h2>My Todos</h2>

      <div style={{ marginBottom: "24px" }}>
        <AddTodo addNewTodo={onAddNewTodo} />
      </div>

      <ul style={{ listStyle: "none" }}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            label={todo.label}
            status={todo.status}
          />
        ))}
      </ul>
    </>
  );
}

export default Todos;

// JSX : Embed with JavaScript with { }
// JSX Restriction
// - Can not use JS reserved keywords eg. class, for
// - JSX must have only one root element
