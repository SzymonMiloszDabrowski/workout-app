import './navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src="images/logo.svg" alt="logo" className="logo" />
      </Link>
      <ul className="navigation">
        <li>
          <Link to="/login">Zaloguj się</Link>
        </li>
        <li>
          <Link to="/registration" className="registerButton">
            Zarejestruj się
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
