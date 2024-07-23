import { useState } from "react";
import classes from "./AddTodo.module.css";

const AddTodo = (props) => {
  const [enteredLabel, setEnteredLabel] = useState("");

  const labelChangeHanlder = (event) => {
    setEnteredLabel(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.addNewTodo(enteredLabel);
    setEnteredLabel("");
  };
  return (
    <form className={classes["the-form"]} onSubmit={submitHandler}>
      {/* input - label */}
      <input
        type="text"
        name="label"
        className={classes["input-field"]}
        value={enteredLabel}
        onChange={labelChangeHanlder}
      />
      {/* <p>Entered Label : {enteredLabel}</p> */}
      {/* button */}
      <button className={classes["btn-add"]} type="submit">
        Add
      </button>
    </form>
  );
};

export default AddTodo;

// Controlled Component : state variable and onChange Handler function
// Uncontrolled Component
