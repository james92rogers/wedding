import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar">
      <ul className="navlist">
        <li className="home">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/where">Where</Link>
        </li>
        <li>
          <Link to="/weddingparty">The Wedding Party</Link>
        </li>
        <li>RSVP</li>
      </ul>
    </div>
  );
};

export default Nav;
