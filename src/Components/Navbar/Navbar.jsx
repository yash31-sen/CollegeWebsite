import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/Logo.png';
import menu_icon from '../../assets/menu.gif';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 700) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener("scroll", changeBackground);

    // Clean up the event listener
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };


  return (
    <>
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <img src={logo} alt="Logo" className='logo' />
        <ul className={`hide-mobile-menu ${mobileMenu ? 'active' : ''}`}>
          <li>Home</li>
          <li>Program</li>
          <li >
            About Us
            
          </li>
          <li>Campus</li>
          <li>Testimonials</li>
          <li>Contact Us</li>
          <button className="addmission">
            Admission {new Date().getFullYear()}
          </button>
        </ul>
        <img src={menu_icon} alt="Menu Icon" className='menu-icon' onClick={toggleMenu} />
      </nav>
    </>
  );
};

export default Navbar;
