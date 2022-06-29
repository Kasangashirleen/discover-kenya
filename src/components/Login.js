import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import "./Login.css";
// import Nav from "./Nav";

function Login() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    setLoginData((prevCreds) => {
      return {
        ...prevCreds,
        [e.target.name]: e.target.value,
      };
    });
  }
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/search`);
  };

  function onLogin(e) {
    e.preventDefault();
    axios
      .post("https://discover-kenya.herokuapp.com/auth/token/login", loginData)
      .then((res) => {
        localStorage.setItem("token", res.data.auth_token);
      })
      .catch((err) => console.log(err));
      handleClick()
  }

  //   const navigate = useNavigate()

  //   const handleClick = () => {
  //       navigate(`/search`)
  //       }

  return (
    <>
      <Navbar />
      <section className="login_div">
        <form className="login_form" onSubmit={onLogin}>
          <h3>Login Form</h3>
          <input
            placeholder="Username"
            type="text"
            name="username"
            onChange={handleChange}
            value={loginData.username}
            required
          />

          <input
            placeholder="Password"
            type="password"
            name="password"
            onChange={handleChange}
            value={loginData.password}
            required
          />

          <button>LOGIN</button>
          <br></br>
          <p>
            Don't have an Account? <Link to="/register">Register</Link>
          </p>
        </form>
      </section>
    </>
  );
}

export default Login;
