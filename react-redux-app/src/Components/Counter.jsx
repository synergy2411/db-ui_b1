import { useSelector } from "react-redux";
import CounterButtons from "./CounterButtons";

function Counter() {
  const { counter } = useSelector((store) => store.ctr);

  return (
    <div className="text-center">
      <h1 className="display-4 mb-3">Counter : {counter}</h1>
      <CounterButtons />
    </div>
  );
}

export default Counter;
