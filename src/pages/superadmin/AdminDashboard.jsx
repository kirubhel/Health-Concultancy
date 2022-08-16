import React, { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useJwt } from "react-jwt";
import { useState } from "react";

function AdminDashboard() {
  const location = useLocation();
 

  const token = localStorage.getItem("token");
  const user = useJwt(token);

  

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/adminlogin";
  };

  return (
    <>
      <div className="breadcrumb-bar mt-5">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-12 col-12">
              <h2 className="breadcrumb-title">Dashboard</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <div className="profile-sidebar">
                <div className="widget-profile pro-widget-content">
                  <div className="profile-info-widget">
                    <a href="#" className="booking-doc-img">
                      <img
                        src="assets/img/doctors/doctor-thumb-02.jpg"
                        alt="User Image"
                      />
                    </a>
                    <div className="profile-det-info">
                      <h3>{user.fullName}</h3>
                      <div className="patient-details">
                        <h5 className="mb-0">
                          {user.role} , {user.email}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dashboard-widget">
                  <nav className="dashboard-menu">
                    <ul>
                      <li
                        className={
                          location.pathname == "/admindashboard" ? "active" : ""
                        }
                      >
                        <Link to="/admindashboard">
                          <i className="fas fa-columns"></i>
                          <span>Dashboard</span>
                        </Link>
                      </li>
                      <li
                        className={
                          location.pathname == "/admindashboard/appointment"
                            ? "active"
                            : ""
                        }
                      >
                        <Link to="appointment">
                          <i className="fas fa-calendar-check"></i>
                          <span>Appointments</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="admins">
                          <i className="fas fa-user-injured"></i>
                          <span>My Admins</span>
                        </Link>
                      </li>

                      <li>
                        <a href="chat-doctor.html">
                          <i className="fas fa-comments"></i>
                          <span>Message</span>
                          <small className="unread-msg">23</small>
                        </a>
                      </li>
                      <li>
                        <a href="doctor-profile-settings.html">
                          <i className="fas fa-user-cog"></i>
                          <span>Profile Settings</span>
                        </a>
                      </li>

                      <li>
                        <a href="doctor-change-password.html">
                          <i className="fas fa-lock"></i>
                          <span>Change Password</span>
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={logout}
                          className="hover:color-[#0DE2FE] hover:cursor-pointer"
                        >
                          <i className="fas fa-sign-out-alt"></i>
                          <span>Logout</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-lg-8 col-xl-9">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
