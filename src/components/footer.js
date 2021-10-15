import LogoImg from "../assets/logo_BCHtagline.svg";

const Footer = (props) => {
  return (
    <footer>
      <img src={LogoImg} alt="BCH Logo" />
      <div> Boston Children’s Hospital</div>
      <div>&copy; 2021 All Rights Reserved</div>
    </footer>
  );
};

export default Footer;
