import React from "react";
import drawing from "../assets/header.jpg";
import wreath from "../assets/wreath.png";

const Home = () => {
  return (
    <div className="home-page">
      <div className="images">
        <img className="couple-image" src={drawing} alt={"James and Steph"} />
        {/* <img className="wreath-image" src={wreath} alt={"wreath"} /> */}
      </div>

      <p>
        Welcome to our wedding website. We can't wait to celebrate our special
        day with you.
      </p>
      <p>
        We've created this website as a convenient and interactive way to share
        all of the important details with you in the lead up to our wedding. You
        can also learn more about the Bridal Party, the Groomsmen, and check out
        registry information too.
      </p>
      <p>So have fun, take a look around.</p>

      <p>
        Finally - thank you for your ongoing love and support. We are so excited
        to share this day with you and with all of our favourite people.
      </p>
    </div>
  );
};

export default Home;
