import React from 'react';
import { Link } from 'react-router-dom';
import { FaFolder, FaFile, FaChartLine } from 'react-icons/fa';
import './Navbar.css';

const Sidebar = () => {
  const { pathname } = window.location; 

  return (
    <div className="sidebar">
      <h1 className="sidebar-header">Управление заявками</h1>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link 
              to="/" 
              className={pathname === '/' ? 'nav-link active' : 'nav-link'}
            >
              <FaFolder className="nav-icon" />
              Картотека заявок
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/AccountingTable" 
              className={pathname === '/AccountingTable' ? 'nav-link active' : 'nav-link'}
            >
              <FaFile className="nav-icon" />
              Учетные записи
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/DashBoard" 
              className={pathname === '/DashBoard' ? 'nav-link active' : 'nav-link'}
            >
              <FaChartLine className="nav-icon" />
              Дашборд
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;