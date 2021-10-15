import React from "react";

const Radio = ({ name, children }) => (
  <div className="radio">
    <label className="radio__title">
      Radio Buttons
      <span className="inputbox__required inputbox__required--show">*</span>
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
);

export default Radio;
