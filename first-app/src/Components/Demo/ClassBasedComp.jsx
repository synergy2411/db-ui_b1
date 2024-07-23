import { Component } from "react";
class ClassBasedComp extends Component {
  state = {
    toggle: true,
    counter: 0,
  };

  clickHandler() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  constructor() {
    super();
    console.log("CONSTRUCTOR");
  }

  componentDidMount() {
    console.log("COMP DID MOUNT");
  }

  componentDidUpdate() {
    console.log("COMP DID UPDATE");
  }

  componentWillUnmount() {
    console.log("COMP WILL UNMOUNT");
  }

  render() {
    console.log("RENDER");
    return (
      <>
        <h1>Hello from Class based component</h1>

        <button onClick={this.clickHandler.bind(this)}>
          {this.state.counter}
        </button>

        {this.state.toggle && <p>The content will dynamically appear.</p>}
      </>
    );
  }
}

export default ClassBasedComp;

// const DemoFn = () => {
//     return (
//         <>
//             <h1>Functional Component</h1>
//         </>
//     )
// }
