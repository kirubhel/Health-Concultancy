import React, { useState } from "react";
function Adminlogin() {
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

    if (data.us) {
      alert("successfull");
      window.location.href = "/admindashboard";
      localStorage.setItem("token", data.us);
    } else {
      alert("please check your login");
    }
    console.log(data);
  }
  return (
    <div className="main-wrapper">
      <div className="row">
        <div className="col-md-6 login-bg">
          <div className="login-banner"></div>
        </div>

        <div className="col-md-6 login-wrap-bg">
          <div className="login-wrapper">
            <div className="loginbox">
              <div className="img-logo">
                <img
                  src="../assets_admin/img/logo.png"
                  className="img-fluid"
                  alt="Logo"
                />
              </div>
              <h3>Login</h3>
              <p className="account-subtitle">
                login to your account to continue
              </p>
              <form onSubmit={loginUser}>
                <input
                  type="hidden"
                  name="_token"
                  value="40ELpMXqAbrRjDmgK1mHVo0BNm8UPlDMJDEHFbgq"
                />{" "}
                <div className="form-group form-focus">
                  <input
                    type="text"
                    className="form-control floating"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label className="focus-label">Enter Email</label>
                  <div className="text-danger pt-2"></div>
                </div>
                <div className="form-group form-focus">
                  <input
                    type="password"
                    className="form-control floating pass-input"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label className="focus-label">Enter Password</label>
                  <span className="fa fa-eye-slash toggle-password pt-4"></span>
                  <div className="text-danger pt-2"></div>
                </div>
                {/* <div className="form-group">
                  <div className="row">
                    <div className="col-6">
                      <label className="custom_check mr-2 mb-0 d-inline-flex">
                        {" "}
                        Remember me
                        <input type="checkbox" name="radio" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="col-6 text-end">
                      <a className="forgot-link" href="forgot-password.html">
                        Forgot Password ?
                      </a>
                    </div>
                  </div>
                </div> */}
                <div className="d-grid">
                  <button
                    className="btn btn-primary bg-[#09E5AB]"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adminlogin;
