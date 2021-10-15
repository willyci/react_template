const Button = ({ text, styleName }) => {
  const defaultClick = (e) => {
    //console.log(e);
    console.log("stop click on me!");
  };

  return (
    <button className={`${styleName}`} onClick={defaultClick}>
      {text}
    </button>
  );
};

export default Button;
