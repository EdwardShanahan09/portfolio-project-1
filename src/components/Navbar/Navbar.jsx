import { useState } from "react";
import "./Navbar.scss";
import logoDark from "../../assets/imgs/logo-dark.svg";
import Container from "../Container/Container";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavbarToogle = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };
  return (
    <nav className="navbar">
      <Container>
        <a href="#" className="navbar__logo">
          <img src={logoDark} alt="Ellie Mae Logo" />
        </a>

        <ul className="navbar__list">
          <li className="navbar__item">
            <a className="navbar__link" href="#">
              Home
            </a>
          </li>
          <li className="navbar__item">
            <a className="navbar__link" href="#">
              About
            </a>
          </li>
          <li className="navbar__item">
            <a className="navbar__link" href="#">
              Services
            </a>
          </li>
          <li className="navbar__item">
            <a className="navbar__link" href="#">
              Portfolio
            </a>
          </li>
          <li className="navbar__item">
            <a className="navbar__link" href="#">
              Contact
            </a>
          </li>
        </ul>

        <div
          onClick={handleNavbarToogle}
          className={`navbar__menu ${isOpen ? "active" : ""}`}
        >
          <div className="navbar__menu-line navbar__menu-line--top"></div>
          <div className="navbar__menu-line navbar__menu-line--bottom"></div>
        </div>

        <div className={`navbar__overlay ${isOpen ? "active" : ""}`}></div>
      </Container>
    </nav>
  );
};

export default Navbar;
