function Todos() {
  let username = "John Doe";
  let isAdmin = false;

  let btnClicked = () => alert("Who's this?");

  return (
    <>
      <h2 className="">Todos coming soon...</h2>
      <p>User name : {username}</p>
      <p>User is {isAdmin ? "" : "NOT"} Admin.</p>
      <button onClick={btnClicked}>Click Me</button>
    </>
  );
}

export default Todos;

// JSX : Embed with JavaScript with { }
// JSX Restriction
// - Can not use JS reserved keywords eg. class, for
// - JSX must have only one root element
