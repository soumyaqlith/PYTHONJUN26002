import React from "react";
import { Link } from "react-router";

function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/service">Service</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/register">Register</Link>
    </div>
  );
}

export default Navbar;
