import React, { useEffect } from "react";
import drawing from "../assets/hand_drawn_2.png";
import LoggedOut from "../components/LoggedOut";
import { getLogin } from "../helpers/auth";

const Home = () => {
  const userLoggedIn = getLogin();
  const countDownDate = new Date("Sep 11, 2023 13:00:00").getTime();

  useEffect(() => {
    const myfunc = setInterval(function () {
      const now = new Date().getTime();
      const timeleft = countDownDate - now;

      const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

      document.getElementById(
        "timer"
      ).innerHTML = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds until the big day`;
    }, 1000);

    return () => clearInterval(myfunc);
  });

  return (
    <div className="home-page">
      {userLoggedIn ? (
        <>
          <div className="images">
            <img
              className="couple-image"
              src={drawing}
              alt={"James and Steph"}
            />
          </div>
          <div id="timer"></div>
          <div className="text">
            <p>
              Welcome to our wedding website. We can't wait to celebrate our
              special day with you.
            </p>
            <p>
              We've created this website as a convenient and interactive way to
              share all of the important details with you in the lead up to our
              wedding. You can also learn more about the Bridal Party, the
              Groomsmen, and check out registry information too.
            </p>
            <p>So have fun, take a look around.</p>

            <p>
              Finally - thank you for your ongoing love and support. We are so
              excited to share this day with you and with all of our favourite
              people.
            </p>
          </div>
        </>
      ) : (
        <LoggedOut />
      )}
    </div>
  );
};

export default Home;
