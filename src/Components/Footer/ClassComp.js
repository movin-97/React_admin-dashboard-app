import React from "react";

export class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      data: 0,
    };
  }
  plus = () => {
    this.setState({ data: this.state.data + 1 });
  };
  minus = () => {
    this.setState({ data: this.state.data - 1 });
  };
  render() {
    return (
      <div className="">
        <h1>{this.state.data}</h1>
        <button onClick={this.plus}>+</button>
        <button onClick={this.minus}>-</button>
      </div>
    );
  }
}
