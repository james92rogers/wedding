import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getLogin } from "../helpers/auth";

const Nav = ({ location }) => {
  const userLoggedIn = getLogin();
  const url = window.location.href;
  useLocation();

  return (
    <div className="navbar">
      {userLoggedIn && (
        <ul className="navlist">
          <li className="home">
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/details">Details</Link>
          </li>
          <li>
            <Link to="/about">James & Steph</Link>
          </li>
          <li>
            <Link to="/weddingparty">The Wedding Party</Link>
          </li>
          <li>
            <Link to="/rsvp">RSVP</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Nav;
