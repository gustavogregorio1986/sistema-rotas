import React, { useState } from 'react';
import NavItem from './NavItem';
import Button from './Button';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Dev React</div>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <NavItem name="Home" link="/" />
          <NavItem name="About" link="/about" />
          <NavItem name="Services" link="/services" />
          <NavItem name="Contact" link="/contact" />
        </ul>
      </div>
      <Button onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
