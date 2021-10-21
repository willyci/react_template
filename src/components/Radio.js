// this is a radio component
// it include the radio button and label
// all the setting is passed in using props
// onChange function is in parent

const Radio = (props) => {
  return (
    <div className="radio__item">
      <input
        id={props.id}
        onChange={props.changed}
        value={props.value}
        type="radio"
        defaultChecked={props.isSelected}
        name={props.group}
        className="radio__button"
      ></input>
      <label for={props.id} className="radio__label">
        {props.label}
      </label>
    </div>
  );
};

export default Radio;
