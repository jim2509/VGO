import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <a href="#" className="footer__logo">
          <img src="/src/assets/images/logo.png" alt="VGO Logo" className="footer__logo-img" />
        </a>
        <nav className="footer__nav">
          <ul className="footer__nav-list flex flex-center flex-wrap">
            <li className="footer__nav-item">
              <Link to="/" className="footer__nav-link">Home</Link>
            </li>
            <li className="footer__nav-item">
              <Link to="/About" className="footer__nav-link">About</Link>
            </li>
            <li className="footer__nav-item">
              <Link to="/Works" className="footer__nav-link">Our works</Link>
            </li>
            <li className="footer__nav-item">
              <Link to="/English" className="footer__nav-link">Take a pledge</Link>
            </li>
            <li className="footer__nav-item">
              <Link to="/Talpata" className="footer__nav-link">Talpata</Link>
            </li>
            <li className="footer__nav-item">
              <Link to="/Contact" className="footer__nav-link">Contact</Link>
            </li>
          </ul>
        </nav>
        <ul className="footer__social flex flex-center">
          <li className="footer__social-list">
            <a href="https://web.facebook.com/visiongreenorganization" className="footer__social-link">
              <i className="bx bxl-facebook footer__social-icon"></i>
            </a>
          </li>
          <li className="footer__social-list">
            <a href="https://instagram.com/vision_green_organization?igshid=Yzg5MTU1MDY=" className="footer__social-link">
              <i className="bx bxl-instagram footer__social-icon"></i>
            </a>
          </li>
          <li className="footer__social-list">
            <a href="https://www.linkedin.com/company/vision-green-organization/" className="footer__social-link">
              <i className="bx bxl-linkedin footer__social-icon"></i>
            </a>
          </li>
        </ul>
        <span className="line"></span>
        <p className="footer__text text-center">
          Copyright &copy; Vision Green Organization. All rights reserved 2022.
        </p>
      </div>
    </footer>
  );
};

export default Footer;