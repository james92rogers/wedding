import React from "react";
import henry from "../assets/henry.png";
import tarkin from "../assets/tarkin.png";
import aidan from "../assets/aidan.png";
import ed from "../assets/ed.png";
import chia from "../assets/chia.png";
import sammi from "../assets/sammi.png";
import grace from "../assets/grace.png";
import jon from "../assets/jon.png";
import ronnie from "../assets/ronnie.png";
import sam from "../assets/sam.png";
import { getLogin } from "../helpers/auth";
import LoggedOut from "../components/LoggedOut";

const WeddingParty = () => {
  const userLoggedIn = getLogin();

  return (
    <div className="weddingparty">
      {userLoggedIn ? (
        <>
          <div className="side">
            <div className="headmember">
              <h3>The Best Man:</h3>
              <h4>Tarkin Sadik</h4>
              <img src={tarkin} />
              <p>
                Tarkin will be easy to spot on the day because he will be the
                sharpest looking person there. James and Tarkin met in 2014
                while both <span className={"italic"}>temporarily</span> working
                for QVC. Fast forward a few years and they were both managers of
                their respective teams, fighting side by side in meetings,
                relying on each other for advice (although it was almost always
                James who needed it), and making sure they never missed a lunch
                together (which had its own opening ceremony). They are both
                part of what others refer to as 'The Wrestling Crew' and even
                flew out to America to fulfill their dream of watching
                Wrestlemania live.
              </p>
            </div>
            <div className="members">
              <h3>The Groomsmen:</h3>
              <div className="member">
                <h4>Henry Rogers</h4>
                <img src={henry} />
                <p>
                  The younger brother of the groom, Henry and James have spent
                  many years (well, their entire lives really)
                  discussing/arguing about music, sports, movies, games, and
                  anything else they can think about. Luckily whenever a
                  disagreement is too big, their shared loved of Plymouth Argyle
                  manages to restore the peace.
                </p>
              </div>
              <div className="member">
                <h4>Ed Rogers</h4>
                <img src={ed} />
                <p>
                  The older brother of the groom, Ed and James enjoy spending
                  their time teaming up to take the mick out of whoever is
                  nearest them... so most of the time that happens to be Henry.
                  Now they talk to each other almost entirely in the form of
                  memes or using quotes from old Simpsons episodes.
                </p>
              </div>
              <div className="member">
                <h4>Ronnie Parratt</h4>
                <img src={ronnie} />
                <p>
                  The nephew of the bride, Ronnie will likely claim he has
                  defeated James at football in the garden, Badminton at Center
                  Parcs, or wrestling in the swimming pool, but he would be
                  lying about all of these things.
                </p>
              </div>
              <div className="member">
                <h4>Aidan Stimson</h4>
                <img src={aidan} />
                <p>
                  Aidan and James first met when Aidan took a job that James was
                  after. They should have been enemies, but instead the two of
                  them formed an alliance based on a love of drinking, eating
                  fast food, and playing air guitars on the sofa to Fall Out
                  Boy. When around each other, expect to hear terrible
                  Australian accents, as well as the phrases 'Awww yeah' and 'Ya
                  drongo' used frequently.
                </p>
              </div>
            </div>
          </div>
          <div className="side">
            <div className="headmember">
              <h3>The Maid of Honour:</h3>
              <h4>Sophie Scowen</h4>
              <img src={chia} />
              <p>
                Sophie and Steph met when Sophie patiently trained Steph in the
                ways of floor managing all the way back in 2016 and quickly
                became firm friends. Sharing their interest in live comedy and
                travel, they loved going to the Fringe Festival in Edinburgh
                (although covid put a stop to that!) Sophie clearly took leave
                of her senses when she agreed to move in with Steph and James
                and spent the next almost 4 years being the best housemate,
                argument adjudicator and covid buddy anyone could ask for. When
                it was time for James to propose, Sophie was instrumental in
                organising the proposal and double checking the ring!
              </p>
            </div>
            <div className="members">
              <h3>The Bridal Party:</h3>
              <div className="member">
                <h4>Sammi Pymm</h4>
                <img src={sammi} />
                <p>
                  The older sister of the Bride, Sammi and Steph have been
                  partners in crime for a long time! Sammi has been a great
                  support every step of the way and is always on hand with a
                  glass of wine and terrible advice when needed.
                </p>
              </div>
              <div className="member">
                <h4>Grace Parratt</h4>
                <img src={grace} />
                <p>
                  The oldest niece of the bride, Grace and Steph share a love of
                  tv, theatre, and mocking Sammi at every available opportunity!
                  Grace is a fantastic niece, all round brilliant person, and
                  has been hounding Steph to settle down for so long, she had to
                  be a bridesmaid!
                </p>
              </div>
              <div className="member">
                <h4>John Booker</h4>
                <img src={jon} />
                <p>
                  John is one of Steph’s oldest friends, meeting in first year
                  of University they became more like siblings then friends.
                  After playing silly pranks on each other, mostly John on
                  Steph, too many nights out, and the occasional session in the
                  library, John and Steph were best idiots forever! 13 years
                  later, after many trips up and down the country to see each
                  other and support each other's lives, Steph could not imagine
                  walking down the aisle without John there to mock her the
                  whole way (and maybe say something supportive!)
                </p>
              </div>
              <div className="member">
                <h4>Sam Neuchterlien</h4>
                <img src={sam} />
                <p>
                  Another University survivor, Sam and Steph connected via a
                  Facebook group (remember them?!) before starting way back in
                  2009 and the rest was history. They share a love of the
                  theatre, art, Eurovision, and love to sing songs from musicals
                  and the 90s (mostly in key!) From the dreadful uni houses in
                  Chester to trips to New York and Amsterdam and everything in
                  between, they have laughed the whole way through.
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <LoggedOut />
      )}
    </div>
  );
};

export default WeddingParty;
