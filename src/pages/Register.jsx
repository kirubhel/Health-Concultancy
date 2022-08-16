import React, { useState } from "react";
import { Link } from "react-router-dom";
function Register() {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Patient");

  async function registerUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:4000/api/users/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        userName,
        phoneNumber,
        email,
        password,
        role,
      }),
    });

    const data = await response.json();
    console.log(data);
    if (data.status) {
      alert("Successfuly Registerd");
    } else {
      alert(data.data);
    }
  }
  return (
    <div className="content min-h-[205px] my-10">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="account-content">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-7 col-lg-6 login-left">
                  <img
                    src="assets/img/login-banner.png"
                    className="img-fluid"
                    alt="Doccure Register"
                  />
                </div>
                <div className="col-md-12 col-lg-6 login-right">
                  <div className="login-header">
                    <h3>Patient Register</h3>
                  </div>

                  <form onSubmit={registerUser}>
                    <div className="form-group form-focus">
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="form-control floating"
                      />
                      <label className="focus-label">FullName</label>
                    </div>
                    <div className="form-group form-focus">
                      <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="form-control floating"
                      />
                      <label className="focus-label">UserName</label>
                    </div>
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
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="form-control floating"
                      />
                      <label className="focus-label">Mobile Number</label>
                    </div>
                    <div className="form-group form-focus">
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control floating"
                      />
                      <label className="focus-label">Create Password</label>
                    </div>
                    <div className="text-end">
                      <Link className="forgot-link" to="/login">
                        Already have an account?
                      </Link>
                    </div>
                    <button
                      className="btn btn-primary  bg-[#09E5AB] w-100 w-100 btn-lg login-btn"
                      type="submit"
                    >
                      Signup
                    </button>
                    <div className="login-or">
                      <span className="or-line"></span>
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

export default Register;
