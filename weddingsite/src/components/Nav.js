import React from "react";
import { Link } from "react-router-dom";
import { getLogin } from "../helpers/auth";

const Nav = () => {
  const userLoggedIn = getLogin();
  return (
    <div className="navbar">
      {/* {userLoggedIn && ( */}
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
      {/* )} */}
    </div>
  );
};

export default Nav;
