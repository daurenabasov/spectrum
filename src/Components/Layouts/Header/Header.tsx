import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../UI/Button/Button";
import Logo from "../../../Assets/Icons/header-logo.svg";
import "./Header.style.scss";
import Burger from "../../UI/Burger/Burger";
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
  const navigate = useNavigate();

  const [showNav, setShowNav] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const getHome = () => {
    navigate("/");
  };

  const navIconClass = `nav_icon_1 ${isOpen ? "open" : ""}`;

  return (
    <>
      <header className="header">
        <div id="container">
          <div className="header-logo" onClick={getHome}>
            <img src={Logo} alt="logo" />
          </div>
          <nav>
            <ul className="header-nav">
              <li>
                <a href="">Spectrum.DEX</a>
              </li>
              <li>
                <a href="">SPF Token</a>
              </li>
              <li>
                <a href="">Community</a>
              </li>
              <li>
                <a href="">Governance</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Help</a>
              </li>
            </ul>
          </nav>
          <div className="header-helpers">
            <Button>Launch DEX</Button>
            <Button>Light</Button>
          </div>
          <div className="burger" onClick={() => setShowNav(!showNav)}>
            <Burger
              className={navIconClass}
              onClick={handleClick}
            ></Burger>
          </div>
        </div>
      </header>

      {showNav && <Sidebar show={showNav} setShowNav={setShowNav} />}
    </>
  );
};

export default Header;
