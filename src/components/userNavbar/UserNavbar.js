import './userNavbar.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import Menu from '../menu/Menu';

const UserNavbar = () => {
  let [visible, setVisible] = useState(false);

  const toggleMenu = () => {
    setVisible((prev) => !prev);
  };

  return (
    <nav className="userNavbar">
      <ul className="leftItems">
        <li>
          <button className="hamburger" onClick={toggleMenu}>
            <img src="./images/hamburger.svg" alt="" />
          </button>
          <Menu toggle={toggleMenu} visible={visible} />
        </li>
        <li>
          <Link to="/main">
            <img src="./images/logo.svg" alt="logo" className="logo" />
          </Link>
        </li>
      </ul>
      <ul className="rightItems">
        <li>
          <Link to="/" onClick={() => localStorage.clear()}>
            Wyloguj się
          </Link>
        </li>
        <li>
          <span>{JSON.parse(localStorage.getItem('username'))}</span>
          <img src="./images/avatar.svg" alt="avatar" className="avatar" />
        </li>
      </ul>
    </nav>
  );
};

export default UserNavbar;
