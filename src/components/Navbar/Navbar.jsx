import { useState, useEffect } from "react";
import "./Navbar.scss";
import logoDark from "../../assets/imgs/logo-dark.svg";
import logoLight from "../../assets/imgs/logo-light.svg";
import Container from "../Container/Container";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fixNav, setFixNav] = useState(false);

  const handleNavbarToogle = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  const stickyNavbar = () => {
    const windowHeight = window.scrollY;

    if (windowHeight > 500) {
      setFixNav(true);
    } else {
      setFixNav(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("scroll", stickyNavbar);
  });
  return (
    <nav className={`navbar ${fixNav ? "sticky" : " "}`}>
      <Container>
        <a href="#" className="navbar__logo">
          <img
            className="navbar__logo--dark"
            src={logoDark}
            alt="Ellie Mae Logo"
          />

          <img
            className="navbar__logo--light"
            src={logoLight}
            alt="Ellie Mae Logo"
          />
        </a>

        <ul className={`navbar__list ${isOpen ? "active" : ""}`}>
          <li className="navbar__item">
            <a className="navbar__link" href="#">
              Home
            </a>
          </li>
          <li className="navbar__item">
            <a className="navbar__link" href="#about">
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
