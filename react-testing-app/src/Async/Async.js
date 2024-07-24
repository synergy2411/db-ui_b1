import { useEffect, useState } from "react";

function Async() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const todoCollection = await response.json();
      setTodos(todoCollection);
    };

    fetchTodos();
  }, []);

  return (
    <>
      <h1>Async Component</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}

export default Async;
