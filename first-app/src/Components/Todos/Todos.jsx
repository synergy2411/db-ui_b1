import TodoItem from "./TodoItem/TodoItem";

function Todos() {
  let todos = [
    { id: "t001", label: "pot the plants", status: "pending" },
    { id: "t002", label: "buy the pulses", status: "completed" },
    { id: "t003", label: "iron the jeans", status: "pending" },
    { id: "t004", label: "renew car insurance", status: "completed" },
    { id: "t005", label: "buy T-shirts", status: "pending" },
  ];

  return (
    <>
      <h2 className="">My Todos</h2>

      {todos.map((todo) => (
        <TodoItem id={todo.id} label={todo.label} status={todo.status} />
      ))}
    </>
  );
}

export default Todos;

// JSX : Embed with JavaScript with { }
// JSX Restriction
// - Can not use JS reserved keywords eg. class, for
// - JSX must have only one root element
