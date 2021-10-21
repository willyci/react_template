// using class to create component
// rumor FB will drop it using function and hook
//
/*
import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to login Page!</h2>
      </div>
    );
  }
}

export default Home;
*/

// using function to create component
// radio button example
// using state hook
// answer = picked value, with default value

import React, { useState } from "react";

// get the Radio component
import Radio from "../components/Radio";

function Login() {
  // Declare a new state variable, call "answer", default value = 1
  const [answer, setAnswer] = useState("1");
  // second value for second set of the radio buttons
  const [answer2, setAnswer2] = useState("male2");

  // create a pop up alert
  // will called then click on button
  function pop() {
    console.log("you picked " + answer + " and " + answer2);
    alert("you picked " + answer + " and " + answer2);
  }

  // render to the page
  return (
    <div>
      <h2>Welcome to login Page!</h2>
      <hr />
      <h3>Radio button without using Radio component</h3>
      <div className="container--horizontal">
        <div className="radio__item">
          {/* radio button, value=1, group=gender, onChange even = setAnswer */}
          <input
            onChange={(e) => setAnswer(e.target.value)}
            id="radio_button_1"
            type="radio"
            name="gender"
            className="radio__button"
            value="1"
            defaultChecked="true"
          />
          <label htmlFor="radio_button_1" className="radio__label">
            male
          </label>
        </div>
        <div className="radio__item">
          <input
            onChange={(e) => setAnswer(e.target.value)}
            id="radio_button_2"
            type="radio"
            name="gender"
            className="radio__button"
            value="2"
          />
          <label htmlFor="radio_button_2" className="radio__label">
            female
          </label>
        </div>
        <div className="radio__item">
          <input
            onChange={(e) => setAnswer(e.target.value)}
            id="radio_button_3"
            type="radio"
            name="gender"
            className="radio__button"
            value="0"
          />
          <label htmlFor="radio_button_3" className="radio__label">
            other
          </label>
        </div>
      </div>
      {/* display bind answer value, defaule value is 1 */}
      <h3>Picked : {answer}</h3>
      <hr />
      <h3>Radio button using Radio component</h3>
      <div className="container--vertical">
        {/* passing all value in using props */}
        <Radio
          id="r1"
          changed={(e) => setAnswer2(e.target.value)}
          label="male2"
          group="gender2"
          isSelected={true}
          value="male2"
        />
        <Radio
          id="r2"
          changed={(e) => setAnswer2(e.target.value)}
          label="female2"
          group="gender2"
          isSelected={false}
          value="female2"
        />
        <Radio
          id="r3"
          changed={(e) => setAnswer2(e.target.value)}
          label="other2"
          group="gender2"
          isSelected={false}
          value="other2"
        />
      </div>
      <h3>Picked : {answer2}</h3>
      <hr />
      {/* button, on click run function pop, display selected value */}
      <button className="button button--primary" onClick={pop}>
        alert (normal button)
      </button>
    </div>
  );
}

export default Login;
