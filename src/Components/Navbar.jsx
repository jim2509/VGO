
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="header grid grid-center">
      <div className="container flex flex-items-center flex-justify-between">

        <a href="https://visiongreen.org/" className="logo"> <img src="/src/assets/images/logo.png" alt="VGO Logo"
          className="logo__img" />
        </a>
        <nav className={`nav ${isOpen ? 'active' : ''} `}>
          <ul onClick={toggleNav} className="nav__list flex flex-items-center">
            <li className="nav__list-item">
              <NavLink to="/" className="nav__list-link">
                Home
                <i className="bx bx-chevron-right nav__list-icon"></i>
              </NavLink>
            </li>
            <li className="nav__list-item">
              <NavLink to="/About" className="nav__list-link">
                About
                <i className="bx bx-chevron-right nav__list-icon"></i>
              </NavLink>
            </li>
            <li className="nav__list-item">
              <NavLink to="/Works" className="nav__list-link">
                Our Works
                <i className="bx bx-chevron-right nav__list-icon"></i>
              </NavLink>
            </li>
            <li className="nav__list-item">
              <NavLink to="/English" className="nav__list-link">
                Take a Pledge
                <i className="bx bx-chevron-right nav__list-icon"></i>
              </NavLink>
              <ul className="nav__sub-list">
                <li className="nav__sub-item">
                  <NavLink to="/English" className="nav__sub-link">English</NavLink>
                </li>
                <li className="nav__sub-item">
                  <NavLink to="/Bangla" className="nav__sub-link">Bangla</NavLink>
                </li>
                <li className="nav__sub-item">
                  <NavLink to="/Hindi" className="nav__sub-link">Hindi</NavLink>
                </li>
                <li className="nav__sub-item">
                  <NavLink to="/Nepali" className="nav__sub-link">Nepali</NavLink>
                </li>
                <li className="nav__sub-item">
                  <NavLink to="/Urdu" className="nav__sub-link">Urdu</NavLink>
                </li>

              </ul>
            </li>
            <li className="nav__list-item">
              <NavLink to="/Talpata" className="nav__list-link">
                Talpata
                <i className="bx bx-chevron-right nav__list-icon"></i>
              </NavLink>
            </li>
            <li className="nav__list-item">
              <NavLink to="/Contact" className="nav__list-link">
                Contact
                <i className="bx bx-chevron-right nav__list-icon"></i>
              </NavLink>
            </li>
          </ul>



        </nav>
        {/* <!-- Nav toggle button --> */}
        <div onClick={toggleNav} className={`nav-toggle  flex flex-column  ${isOpen ? 'active' : ''} `}>
          <span className="nav-toggle__line nav-toggle__line--1 active"></span><span
            className="nav-toggle__line nav-toggle__line--2 active"></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;