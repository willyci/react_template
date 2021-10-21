import React, { Component } from "react";
import Button from "../components/Button";

class Home extends Component {
  state = {
    name: "Douglas Brasil Pereira Lopes",
    cidade: "Rio de Janeiro",
    ary: ["one", "two"]
  };

  soma = (n) => {
    return n + 3;
  };

  pop = () => {
    alert("hello");
  };

  render() {
    return (
      <div>
        <h2>Welcome to AOD call log form Page!</h2>
        <Button styleName="button button--primary" text="button component" />
        <button className="button button--primary" onClick={this.pop}>
          alert (normal button)
        </button>
        <div>{this.soma(4)}</div>
      </div>
    );
  }
}

export default Home;
