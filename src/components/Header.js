import "../styles/layout/Header.scss";
import icon from "../images/Untitled.png";

const Header = () => {
  return (
    <header className="header">
      <img className="header__candyspaceIcon" src={icon} alt="icon" />
      <h4 className="header__title">Candyspace Challenge</h4>
    </header>
  );
};

export default Header;
