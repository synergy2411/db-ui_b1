import { useSelector } from "react-redux";

function Counter() {
  const { counter } = useSelector((store) => store.ctr);

  return (
    <>
      <h1>Counter : {counter}</h1>
    </>
  );
}

export default Counter;
