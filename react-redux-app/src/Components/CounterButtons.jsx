import { useDispatch } from "react-redux";
import { onIncrement } from "../store/counter-slice";

function CounterButtons() {
  const dispatch = useDispatch();

  const increaseClickHandler = () => dispatch(onIncrement());

  return (
    <>
      <button className="btn btn-primary" onClick={increaseClickHandler}>
        Increase
      </button>
      <button className="btn btn-success">Decrease</button>
    </>
  );
}

export default CounterButtons;
