import React from "react";
import { GiKenya } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const iconStyle = {
    opacity: "0.5",
  };

  const linkStyle={
      textDecoration : "none",
      color: 'black',
      "& a::hover": {backgroundColor:"pink", color:"red"}
  }
  return (
    <nav>
      <div className="icon">
        <GiKenya size={73} style={iconStyle} />
      </div>
      <div className="discover-kenya">
        <h3 className="discover">Discover</h3>
        <h2 className="kenya">Kenya</h2>
      </div>
      <ul className="service-about">
        <li>
          <Link to='/' className="home" style={linkStyle}>Home</Link>
          <Link to='/search' className="search" style={linkStyle}>Search</Link>
          <Link to='/about' style={linkStyle}>About</Link>
          <Link to='/services' style={linkStyle}>Services</Link>

        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
