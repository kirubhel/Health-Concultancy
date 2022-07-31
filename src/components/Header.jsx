import React from "react";
import logo from '../assets/img/logo.png'
import {Link } from 'react-router-dom'
function Header() {
  return (
    <header className="header top-0 sticky shadow-md z-10">
      <nav className="navbar navbar-expand-lg header-nav">
        <div className="navbar-header">
          <a id="mobile_btn" href="javascript:void(0);">
            <span className="bar-icon">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </a>
          <Link to="/" className="navbar-brand logo">
            <img src={logo} className="img-fluid" alt="Logo" />
          </Link>
        </div>
        <div className="main-menu-wrapper">
          <div className="menu-header">
            <Link to="/" className="menu-logo">
              <img src={logo} className="img-fluid" alt="Logo" />
            </Link>
            <a id="menu_close" className="menu-close" href="javascript:void(0);">
              <i className="fas fa-times"></i>
            </a>
          </div>
          <ul className="main-nav">
            <li className="has-submenu">
              <Link to="/">Home </Link>
            </li>
          
          </ul>
        </div>
        <ul className="nav header-navbar-rht">
          <li className="nav-item contact-item">
            <div className="header-contact-img">
              <i className="far fa-hospital"></i>
            </div>
            <div className="header-contact-detail mr-4 ">
              <p className="contact-header">Contact</p>
              <p className="contact-info-header"> +1 315 369 5943</p>
            </div>
            <li className="nav-item">
              <Link className="nav-link header-login" to="login">
                login / Signup
              </Link>
            </li>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
