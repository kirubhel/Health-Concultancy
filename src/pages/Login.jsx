import React, { useState } from "react";
import { Link } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:4000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();

    if (data.us){
      alert("successfull")
      window.location.href="/dashboard"
      localStorage.setItem("token",data.us)
    }else{
      alert("please check your login")
    }
    console.log(data);
  }

  return (
    <div className="content min-h-[250px] my-10">
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
                  <form onSubmit={loginUser}>
                    <div className="form-group form-focus">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control floating"
                      />
                      <label className="focus-label">Email</label>
                    </div>
                    <div className="form-group form-focus">
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control floating"
                      />
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
                      <Link to="/register">Register</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
