import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link to="/" className="Brand">ADIDAS</Link>
      <ul className="NavLinks">
        <li><Link to="/category/zapatillas">Zapatillas</Link></li>
        <li><Link to="/category/ropa">Ropa</Link></li>
      
      </ul>
    </nav>
  );
};

export default NavBar;
