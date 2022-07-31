import React from "react";
import { useJwt } from "react-jwt";

function Dashbord() {
  const token = localStorage.getItem("token");

  const user = useJwt(token);
  if (user) {
    console.log("dashboard", user);
    if (!user) {
      localStorage.removeItem("token");
      window.location.href="/"
    }
  }

  return <div>Dashbord</div>;
}

export default Dashbord;
