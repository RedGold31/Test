import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/Dashboard" className="navbar-link">Дешборд</Link>
        </li>
        <li className="navbar-item">
          <Link to="/AccountingTable" className="navbar-link">Учетные записи</Link>
        </li>
        <li className="navbar-item">
          <Link to="/HelpDesk" className="navbar-link">Картотека заявок</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;