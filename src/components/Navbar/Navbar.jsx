import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import logoDark from "../../assets/imgs/logo-dark.svg";
import logoLight from "../../assets/imgs/logo-light.svg";
import Container from "../Container/Container";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fixNav, setFixNav] = useState(false);

  const handleNavbarToggle = () => {
    setIsOpen(!isOpen);
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

    return () => {
      window.removeEventListener("scroll", stickyNavbar);
    };
  }, [isOpen]);

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${fixNav ? "sticky" : ""}`}>
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
            <a className="navbar__link" href="#home" onClick={closeNavbar}>
              Home
            </a>
          </li>
          <li className="navbar__item">
            <a className="navbar__link" href="#about" onClick={closeNavbar}>
              About
            </a>
          </li>
          <li className="navbar__item">
            <a className="navbar__link" href="#services" onClick={closeNavbar}>
              Services
            </a>
          </li>
          <li className="navbar__item">
            <a className="navbar__link" href="#portfolio" onClick={closeNavbar}>
              Portfolio
            </a>
          </li>
          <li className="navbar__item">
            <a className="navbar__link" href="#contact" onClick={closeNavbar}>
              Contact
            </a>
          </li>
        </ul>

        <div
          onClick={handleNavbarToggle}
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
