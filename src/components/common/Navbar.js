import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CommonStyle/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import logo from "../images/logo.png";

import { FiChevronDown } from "react-icons/fi";

function Navbar() {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [isMenu] = useState(false);
  // const toggleClass = () => {
  //   setisMenu(isMenu === false ? true : false);
  //   setResponsiveclose(isResponsiveclose === false ? true : false);
  // };

  let boxClass = ["main-menu menu-right menuq1"];

  if (isMenu) {
    boxClass.push('menuq2');
  }
  else {
    boxClass.push('');
  }

  const [isMenuSubMenu, setMenuSubMenu] = useState(false);

  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };

  let boxClassSubMenu = ["sub__menus"];
  if (isMenuSubMenu) {
    boxClassSubMenu.push('sub__menus__Active');
  } else {
    boxClassSubMenu.push('');
  }

  return (
    <>

      <div className='nav-top'>
        <div className='container'>
          <div className="tophead-content">
            <ul className="social-icon">
              <li>
                <a href="/" target="_blank" without rel="noreferrer">
                  <FaTwitter className='twittericon' />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/TechstreatWebSolution/" target="_blank" without rel="noreferrer">
                  <FaFacebookF className='facebookicon' />
                </a>
              </li>
              <li>
                <a href="https://in.linkedin.com/company/techstreat-web-solution" target="_blank" without rel="noreferrer">
                  <FaLinkedinIn className='linkedinicon navtop-icons' />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/techstreat_web_solutions/" target="_blank" without rel="noreferrer">
                  <FaInstagram className='instagramicon navtop-icons' />
                </a>
              </li>
            </ul>
            <ul className="connectinfo cstm_contact">
              <li>
                <a href="tel: +91 9097445555">
                  <BsFillTelephoneFill className='connectinfo-icons' /> +91 9097445555</a>
              </li>
              <li>
                <a href="mailto:info@techstreat.com">
                  <GrMail className='connectinfo-icons' /> info@techstreat.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <nav className="navbar">
        <div className="navbar-container nav-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={logo} className="img-fluid" alt="img" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" >
                <Link to="#" className="nav-links"> Services <FiChevronDown />
                </Link>
                <ul className={boxClassSubMenu.join(' ')} >
                  <li>
                    <NavLink onClick={closeMobileMenu} activeClassName='is-active' to={`/webdevelopment`}> Web Development </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={closeMobileMenu} activeClassName='is-active' to={`/digitalmarketing`}> Digital Marketing </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={closeMobileMenu} activeClassName='is-active' to={`/uiuxdesign`}> Ui Ux designing </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={closeMobileMenu} activeClassName='is-active' to={`/mobileappdevelopment`}>Mobile App development </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={closeMobileMenu} activeClassName='is-active' to={`/emailservices`}> Email Services
                    </NavLink>
                  </li>
                </ul>
              </li>
            </li>
            <li className="nav-item">
              <NavLink
                to="/ourworks"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                Our Works
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                Blogs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                Contact
              </NavLink>
            </li>

          </ul>
          <div className="wp-li">
            <a className='' href='/' alt="img">
              <FaWhatsapp className='wp-callbtn' />
            </a>
          </div>
        </div>
      </nav>

    </>
  );
}

export default Navbar;
