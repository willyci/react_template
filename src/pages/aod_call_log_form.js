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

        <div className="radio">
          <label className="radio__title">
            Radio Buttons
            <span className="inputbox__required inputbox__required--show">
              *
            </span>
          </label>
          <div className="container--horizontal">
            <div className="radio__item">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                className="radio__button"
                checked
              />
              <label for="male" className="radio__label">
                Male
              </label>
            </div>
            <div className="radio__item">
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                className="radio__button"
              />
              <label for="female" className="radio__label">
                Female
              </label>
            </div>
            <div className="radio__item">
              <input
                type="radio"
                id="other0"
                name="gender"
                value="other0"
                className="radio__button"
              />
              <label for="other0" className="radio__label">
                Other
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
