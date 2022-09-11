import React from "react";
import { Link } from "react-router-dom";

const LoggedOut = () => {
  return (
    <div className="loggedOut">
      <p>
        Please <Link to="/">login</Link> to view this page
      </p>
    </div>
  );
};

export default LoggedOut;
