import { useState } from "react";

function Output() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <h1>The Output Component</h1>
      <p>Demo content is available</p>

      <button onClick={() => setToggle(!toggle)}>Toggle</button>

      {toggle && <p>Toggle is true</p>}
      {!toggle && <p>Toggle is false</p>}
    </>
  );
}

export default Output;
