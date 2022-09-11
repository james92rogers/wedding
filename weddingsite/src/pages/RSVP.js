import React, { useState, useEffect } from "react";
import LoggedOut from "../components/LoggedOut";
import OneForm from "../components/OneForm";
import TwoForm from "../components/TwoForm";
import { getLogin } from "../helpers/auth";

const RSVP = () => {
  const userLoggedIn = getLogin();
  const [entrants, setEntrants] = useState(1);

  const handleChange = (event) => {
    setEntrants(Number(event.target.value));
    console.log(event.target.value);
    console.log(typeof event.target.value);
  };

  useEffect(() => {}, [entrants]);

  return (
    <div className="rsvp">
      {userLoggedIn ? (
        <div className="content">
          <div className="guest-check">
            <p>How many people are you RSVPing for:</p>
            <input
              onChange={handleChange}
              type="number"
              min="1"
              max="2"
              value={entrants}
              className="number"
            />
          </div>
          {entrants === 1 ? <OneForm /> : entrants === 2 ? <TwoForm /> : <></>}
        </div>
      ) : (
        <LoggedOut />
      )}
    </div>
  );
};

export default RSVP;
