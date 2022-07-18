import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./Register.css";

function Register() {
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
    re_password: "",
  });

  const [errMsg, setErrMsg] = useState("");

  function handleChange(event) {
    setRegisterData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function onRegister(e) {
    e.preventDefault();

    if (registerData.password === registerData.re_password) {
      console.log("submitted");
      fetch("https://discover-kenya.herokuapp.com/auth/users/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.token);
        })
        .catch((error) => console.error(error));
    } else {
      setErrMsg(`*Passwords don't match`);
    }
  }

  return (
    <>
      <Navbar />
      <section className="reg_div">
        <form className="reg_form" onSubmit={onRegister}>
          <h3>Sign up Form</h3>
          <input
            placeholder="Username"
            type="text"
            name="username"
            value={registerData.username}
            onChange={handleChange}
            required
          />

          <input
            placeholder="Email"
            type="email"
            name="email"
            value={registerData.email}
            onChange={handleChange}
            required
          />

          <input
            placeholder="Password"
            type="password"
            name="password"
            value={registerData.password}
            onChange={handleChange}
            required
          />

          <input
            placeholder="Confirm Password"
            type="password"
            name="re_password"
            value={registerData.re_password}
            onChange={handleChange}
            required
          />
          <p style={{ color: "red" }}>{errMsg}</p>
          <button>SIGN UP</button>
          <p style={{fontSize:"18px"}}>
            Already Registered? <Link to="/login">Login</Link>
          </p>
        </form>
      </section>
    </>
  );
}

export default Register;
