import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "./Homepage.css";

function Homepage() {
  return (
    <>
      <Navbar />
      <div className="main">
        <div className="page-texts">
          <h3>Explore Kenya with us</h3>
          <h4>Get to discover various destinations and beautiful scenery</h4>
          <p>what are you waiting for ?? try it now</p>
        </div>
        <div className="auth-btns">
          <Link to="/register">
            <button className="sign_btn">Register</button>
          </Link>
          <Link to="/login">
            <button className="login_btn">Login</button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Homepage;
