import { useDispatch } from "react-redux";
import {
  onIncrement,
  onDecrement,
  onAddCounter,
  onSubtractCounter,
} from "../store/counter-slice";

function CounterButtons() {
  const dispatch = useDispatch();

  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => dispatch(onIncrement())}
      >
        Increase
      </button>
      <button
        className="btn btn-success"
        onClick={() => dispatch(onDecrement())}
      >
        Decrease
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => dispatch(onAddCounter(10))}
      >
        Add-10
      </button>
      <button
        className="btn btn-warning"
        onClick={() => dispatch(onSubtractCounter(5))}
      >
        Subtract-5
      </button>
    </>
  );
}

export default CounterButtons;
