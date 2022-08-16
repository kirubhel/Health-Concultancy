import React from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import { useJwt } from "react-jwt";
function Header() {
  const token = localStorage.getItem("token");

  const user = useJwt(token);
  if (user) {
    console.log("dashboard", user.decodedToken);
    if (!user) {
      localStorage.removeItem("token");
      window.location.href = "/";
    }
  }

  const logout = ()=>{
    localStorage.removeItem("token");
    window.location.href = "/admindashboard";
  }

  return (
    <header className="header top-0 sticky shadow-md z-10 ">
      <nav className="navbar navbar-expand-lg header-nav px-10">
        <div className="navbar-header">
          <a id="mobile_btn" href="javascript:void(0);">
            <span className="bar-icon">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </a>
          <Link to="/adminlogin" className="navbar-brand logo">
            <img src={logo} className="img-fluid" alt="Logo" />
          </Link>
        </div>
        <div className="main-menu-wrapper">
          <div className="menu-header">
            <Link to="/" className="menu-logo">
              <img src={logo} className="img-fluid" alt="Logo" />
            </Link>
            <a
              id="menu_close"
              className="menu-close"
              href="javascript:void(0);"
            >
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
            {user == null ? (
              <li className="nav-item">
                <Link className="nav-link header-login" to="login">
                  login / Signup
                </Link>
              </li>
            ) : (
              <li class="nav-item dropdown has-arrow logged-item">
                <a
                  href="#"
                  class="dropdown-toggle nav-link"
                  data-bs-toggle="dropdown"
                >
                  <span class="user-img">
                    <img
                      class="rounded-circle"
                      src="assets/img/doctors/doctor-thumb-02.jpg"
                      width="31"
                      alt="Darren Elder"
                    />
                  </span>
                </a>
                <div class="dropdown-menu dropdown-menu-right">
                  <div class="user-header">
                    <div class="avatar avatar-sm">
                      <img
                        src="assets/img/doctors/doctor-thumb-02.jpg"
                        alt="User Image"
                        class="avatar-img rounded-circle"
                      />
                    </div>
                    <div class="user-text">
                      <h6>Darren Elder</h6>
                      <p class="text-muted mb-0">Doctor</p>
                    </div>
                  </div>
                  <a class="dropdown-item" href="doctor-dashboard.html">
                    Dashboard
                  </a>
                  <a class="dropdown-item" href="doctor-profile-settings.html">
                    Profile Settings
                  </a>
                  <a class="dropdown-item" onClick={logout}>
                    Logout
                  </a>
                </div>
              </li>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
