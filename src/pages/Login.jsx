import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Login() {
  return (
    <div>
      <Header />
      <div className="content min-h-[250px] my-20">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img
                      src="assets/img/login-banner.png"
                      className="img-fluid"
                      alt="Doccure Login"
                    />
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>
                        Login <span>Doccure</span>
                      </h3>
                    </div>
                    <form action="https://template.doccure.io/laravel/template/public/index">
                      <div className="form-group form-focus">
                        <input type="email" className="form-control floating" />
                        <label className="focus-label">Email</label>
                      </div>
                      <div className="form-group form-focus">
                        <input type="password" className="form-control floating" />
                        <label className="focus-label">Password</label>
                      </div>
                      <div className="text-end">
                        <a className="forgot-link" href="forgot-password.html">
                          Forgot Password ?
                        </a>
                      </div>
                      <button
                        className="btn btn-primary bg-[#09E5AB] w-100 w-100 btn-lg login-btn"
                        type="submit"
                      >
                        Login
                      </button>
                      <div className="login-or">
                        <span className="or-line"></span>
                       
                      </div>
                     
                      <div className="text-center dont-have">
                        Don’t have an account?{" "}
                        <a href="register.html">Register</a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
