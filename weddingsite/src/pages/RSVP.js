import React from "react";
import LoggedOut from "../components/LoggedOut";
import { getLogin } from "../helpers/auth";

const RSVP = () => {
  const userLoggedIn = getLogin();

  return (
    <div className="rsvp">
      {userLoggedIn ? (
        <div className="content">
          <div className="rsvp-text">
            <p>To RSVP please send an email to:</p>
            <p className="email-address">pymmrogerswedding@gmail.com</p>
            <p>
              and let us know your name(s), if you are able to join us for our
              special day, and any dietary requirements you may have.
            </p>
          </div>
        </div>
      ) : (
        <LoggedOut />
      )}
    </div>
  );
};

export default RSVP;
