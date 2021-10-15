import propTypes from "prop-types";

// this is a simple header, getting title string from parent
const Header = (props) => {
  return (
    <header style={headerStyle}>
      <div className="header__title">{props.title}</div>
    </header>
  );
};

// in case nothing is passed in
Header.defaultProps = {
  title: "Boston Children's Hospital"
};

// set title type to string, and make it required
Header.propTypes = {
  title: propTypes.string.isRequired
};

// you can add style within this component,
// but watch out for the syntax is different from normal css
const headerStyle = {
  backgroundColor: "#003087",
  color: "#ffffff"
};

export default Header;
