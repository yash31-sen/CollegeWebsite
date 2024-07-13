import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu.gif';
import Dropdown1 from '../DropdownComponents - Copy/nav1dropdown1/Nav1Dropdown.jsx'

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const changeBck = () => {
      if (window.scrollY >= 700) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener("scroll", changeBck);

    // Clean up the event listener
    return () => window.removeEventListener("scroll", changeBck);
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const [dropdowns, setDropdowns] = useState({
    dropdown1: false,
    dropdown2: false,
    dropdown3: false,
    drawer: false
  });

  const handleDropdownClick = (dropdownName) => {
    setDropdowns((prevState) => {
      // Update dropdown state, ensuring only one dropdown is open
      return {
        ...prevState,
        [dropdownName]: !prevState[dropdownName],
        ...(dropdownName === 'dropdown1' ? { dropdown2: false, dropdown3: false } : {}),
        ...(dropdownName === 'dropdown2' ? { dropdown1: false, dropdown3: false } : {}),
        ...(dropdownName === 'dropdown3' ? { dropdown1: false, dropdown2: false } : {}),
        ...(dropdownName === 'drawer' ? {} : {}),
      };
    });
  };
  return (
    <>
    <nav className={navbar ? 'navbar active' : 'navbar'}>
      <img src={logo} alt="" className='logo' />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li  onClick={() => handleDropdownClick('dropdown1')}
        >Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li>Contact us</li>
        <button className="addmission">
          Admission {new Date().getFullYear()}
        </button>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
      
    </nav>

{dropdowns.dropdown1 && <Dropdown1   />}

    </>
  );
}

export default Navbar;
