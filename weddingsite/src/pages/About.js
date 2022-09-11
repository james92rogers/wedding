import React from "react";
import LoggedOut from "../components/LoggedOut";
import { getLogin } from "../helpers/auth";
import us from "../assets/usengaged.jpg";
import pic1 from "../assets/editedjamessteph1.png";
import pic2 from "../assets/editedjamessteph2.png";
import pic3 from "../assets/editedjamessteph3.png";

const About = () => {
  const userLoggedIn = getLogin();

  return (
    <div className="about">
      {userLoggedIn ? (
        <>
          <img src={us} alt="picture of James and Steph" />
          <h3>James and Steph</h3>
          <div className="about-section">
            <p>
              Back in the days of 2016, a young Steph Pymm and an even younger
              James Rogers crossed paths at a work training event. Steph was
              fresh off a career change armed with her quick wit, ever changing
              hair colour, and a love for all things foody. James was the grumpy
              old man of the QVC graphics team, a massive nerd, and dressed like
              he was a fourteen year old. After someone else in the group said
              an unfortunate innuendo and they were the only two who
              acknowledged it, a quick glance was shared, and thus their story
              began.
            </p>
            <img className="pic1" src={pic1} alt="James and Steph early days" />
          </div>
          <div className="about-section" id="middleAboutSection">
            <img className="pic2" src={pic2} alt="James and Steph in Sydney" />
            <p>
              They started dating in late 2017 and never looked back, unless
              they happened to walk by a pasty shop. Through the years they
              visited some exciting places: Sydney, Hobbiton, and an unfortunate
              detour to Aylesbury to name a few; and shared their other passions
              with each other along the way. For Steph, it was her love of
              musicals, cooking for people, and singing at any opportunity
              possible. For James, it was his love of Star Wars, wearing caps
              everywhere, and of course, Plymouth Argyle. Despite neither of
              them picking up the other's passions, they still carried on going
              from strength to strength.
              {/* James and Steph met during an off-site work training event, and
              eventually started dating in late 2017. At this time Steph was
              using her determination and hard work to rise through the ranks at
              QVC, going from a floor manager to a director in the space of two
              years. James, on the other hand, was doing one of his many classic
              job changes... and still dressing like a teenager. */}
            </p>
          </div>
          <div className="about-section">
            <p>
              As with all great love stories, our heroes had to battle through
              many challenges and trials along the way, from career changes to
              isolating together for ten days in the same room. From drunken
              protests in a late night Subway to Steph having to contend with
              the other main love in Jame's life, Winston Pooch (who ended up
              preferring her anyway). Then, on January 3rd 2021, after covid
              foiled his three previous proposal ideas, James finally got down
              on one knee and asked those four words that brought us to this
              day.
              {/* Over the years they've gone through many
              challenges together, be it career changes, isolating together for
              ten days in the same room, drunken protests in a Subway, or Steph
              having to contend with the other main love in James' life, Winston
              Pooch. Despite all of this, they continued to grow together and on
              January 3rd 2021, James got down on one knee and asked those four
              words that brought us to this day. */}
            </p>
            <img
              className="pic3"
              src={pic3}
              alt="James and Steph at their engagement"
            />
          </div>
        </>
      ) : (
        <LoggedOut />
      )}
    </div>
  );
};

export default About;
