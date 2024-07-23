import classes from "./TodoItem.module.css";

function TodoItem({ id, label, status }) {
  return (
    <li className={classes["list-item"]}>
      <h5>
        {label.toUpperCase()} - <span>{status}</span>
      </h5>
    </li>
  );
}

export default TodoItem;
