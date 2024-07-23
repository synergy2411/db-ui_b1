function TodoItem({ id, label, status }) {
  return (
    <h5>
      {label.toUpperCase()} - <span>{status}</span>
    </h5>
  );
}

export default TodoItem;
