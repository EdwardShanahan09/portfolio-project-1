import logoDark from "../assets/imgs/logo-dark.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#" className="logo">
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

      <div className="navbar__menu">
        <div className="navbar__menu-lines"></div>
        <div className="navbar__menu-lines"></div>
      </div>

      <div className="navbar__overlay"></div>
    </nav>
  );
};

export default Navbar;
