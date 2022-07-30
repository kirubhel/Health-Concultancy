import React from "react";
import logo from '../assets/img/logo.png'
function Header() {
  return (
    <header className="header top-0 sticky shadow-md">
      <nav className="navbar navbar-expand-lg header-nav">
        <div className="navbar-header">
          <a id="mobile_btn" href="javascript:void(0);">
            <span className="bar-icon">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </a>
          <a href="index.html" className="navbar-brand logo">
            <img src={logo} className="img-fluid" alt="Logo" />
          </a>
        </div>
        <div className="main-menu-wrapper">
          <div className="menu-header">
            <a href="index.html" className="menu-logo">
              <img src={logo} className="img-fluid" alt="Logo" />
            </a>
            <a id="menu_close" className="menu-close" href="javascript:void(0);">
              <i className="fas fa-times"></i>
            </a>
          </div>
          <ul className="main-nav">
            <li className="has-submenu">
              <a href="#">Home </a>
            </li>
            <li className="has-submenu ">
              <a href="#">Doctors </a>
            </li>
            <li className="has-submenu ">
              <a href="#">Patients </a>
            </li>
            <li className="has-submenu ">
              <a href="#">Pharmacy </a>
            </li>
            <li className="has-submenu active">
              <a href="#">Pages </a>
            </li>
            <li className="has-submenu ">
              <a href="#">Blog </a>
            </li>
            <li className="has-submenu">
              <a href="#" target="_blank">
                Admin
              </a>
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
              <a className="nav-link header-login" href="login.html">
                login / Signup
              </a>
            </li>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
