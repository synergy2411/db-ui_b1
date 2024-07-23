import classes from "./TodoItem.module.css";

function TodoItem({ id, label, status }) {
  return (
    <li className={classes["list-item"]}>
      <p>
        <button className={classes["btn-delete"]}>🗑️</button>
        {label.toUpperCase()} -{" "}
        <span className={classes["span-el"]}>{status}</span>
      </p>
    </li>
  );
}

export default TodoItem;
