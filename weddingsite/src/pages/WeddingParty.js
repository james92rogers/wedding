import React from "react";
import henry from "../assets/henry.png";
import tarkin from "../assets/tarkin.png";
import aidan from "../assets/aidan.png";
import ed from "../assets/ed.png";

const WeddingParty = () => {
  return (
    <div className={"weddingparty"}>
      <div className={"side"}>
        <div className={"headmember"}>
          <h3>The Best Man:</h3>
          <h4>Tarkin Sadik</h4>
          <img src={tarkin} />
          <p>
            Tarkin will be easy to spot on the day because he will be the
            sharpest looking person there. James and Tarkin met in 2014 while
            both <span className={"italic"}>temporarily</span> working for QVC.
            Fast forward a few years and they were both managers of their
            respective teams who never missed a lunch together. They both are
            part of what others refer to as 'The Wrestling Crew' and even flew
            out to America to fulfil their dream of watching Wrestlemania live.
          </p>
        </div>
        <div className={"members"}>
          <h3>The Groomsmen:</h3>
          <div className={"member"}>
            <h4>Henry Rogers</h4>
            <img src={henry} />
            <p>
              The younger brother of the groom, Henry and James have spent many
              years (well, their entire lives really) discussing/arguing about
              music, sports, movies, games, and anything else they can think
              about.
            </p>
          </div>
          <div className={"member"}>
            <h4>Ed Rogers</h4>
            <img src={ed} />
            <p>
              The older brother of the groom, Ed and James enjoy spending their
              time teaming up to take the mick out of whoever is near them... so
              mostly Henry. Now they talk to each other almost entirely in the
              form of memes or using quotes from old Simpsons episodes.
            </p>
          </div>
          <div className={"member"}>
            <h4>Ronnie</h4>
            <p>
              The nephew of the bride, Ronnie will likely claim he has defeated
              James at football in the garden or wrestling at Center Parks, but
              would be lying about both of these things.
            </p>
          </div>
          <div className={"member"}>
            <h4>Aidan Stimson</h4>
            <img src={aidan} />
            <p>
              Aidan and James first met when Aidan took a job that James was
              after. They should have been enemies, but instead formed an
              alliance based on a love of drinking, eating fast food, and
              playing air guitars on the sofa to Fall Out Boy.
            </p>
          </div>
        </div>
      </div>
      <div className={"side"}>
        <div className={"headmember"}>
          <h3>The Maid of Honour:</h3>
          <h4>Sophie Bowie</h4>
        </div>
        <div className={"members"}>
          <h3>The Bridal Party:</h3>
          <div className={"member"}></div>
        </div>
      </div>
    </div>
  );
};

export default WeddingParty;
