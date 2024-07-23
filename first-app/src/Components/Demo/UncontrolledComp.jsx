import { useRef } from "react";

function UncontrolledComp() {
  const inputRef = useRef();

  const addClickHandler = (e) => {
    e.preventDefault();
    console.log("VALUE : ", inputRef.current.value);
  };
  return (
    <>
      <form>
        <input type="text" ref={inputRef} />
        <button onClick={addClickHandler}>Add</button>
      </form>
    </>
  );
}

export default UncontrolledComp;
