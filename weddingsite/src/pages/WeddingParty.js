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
import harri from "../assets/harri.png";
import maisie from "../assets/maisie.png";
import dad from "../assets/dad.png";
import pymms from "../assets/stephenangie.png";
import matt from "../assets/matt.png";
import mum from "../assets/mum.png";
import stacey from "../assets/stacey.png";
import { getLogin } from "../helpers/auth";
import LoggedOut from "../components/LoggedOut";

const WeddingParty = () => {
  const userLoggedIn = getLogin();

  return (
    <div className="weddingparty">
      {userLoggedIn ? (
        <>
          <div className="content">
            <div className="side">
              <div className="headmember">
                <h3>The Best Man:</h3>
                <h4>Tarkin Sadik</h4>
                <img src={tarkin} />
                <p>
                  Tarkin will be easy to spot on the day because he will be the
                  sharpest looking person there. James and Tarkin met in 2014
                  while both <span className={"italic"}>temporarily</span>{" "}
                  working for QVC. Fast forward a few years and they were both
                  managers of their respective teams, fighting side by side in
                  meetings, relying on each other for advice (although it was
                  almost always James who needed it), and making sure they never
                  missed a lunch together (which had its own opening ceremony).
                  They are both part of what others refer to as 'The Wrestling
                  Crew' and even flew out to America to fulfill their dream of
                  watching Wrestlemania live.
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
                    anything else they can think about. Luckily, whenever a
                    disagreement is too big, their shared loved of Plymouth
                    Argyle manages to restore the peace.
                  </p>
                </div>
                <div className="member">
                  <h4>Ed Rogers</h4>
                  <img src={ed} />
                  <p>
                    The older brother of the groom, Ed and James enjoy spending
                    their time teaming up to take the mick out of whoever is
                    nearest them... so most of the time that happens to be
                    Henry. Now they talk to each other almost entirely in the
                    form of memes or using quotes from old Simpsons episodes.
                  </p>
                </div>
                <div className="member">
                  <h4>Ronnie Parratt</h4>
                  <img src={ronnie} />
                  <p>
                    The nephew of the bride, Ronnie will likely claim he has
                    defeated James at football in the garden, Badminton at
                    Center Parcs, or wrestling in the swimming pool, but he
                    would be lying about all of these things. He also likes to
                    say to James that Chelsea are better than Plymouth Argyle,
                    but this too is obviously untrue.
                  </p>
                </div>
                <div className="member">
                  <h4>Aidan Stimson</h4>
                  <img src={aidan} />
                  <p>
                    Aidan and James first met when Aidan took a job that James
                    was after. They should have been enemies, but instead the
                    two of them formed an alliance based on a love of drinking,
                    eating fast food, and playing air guitars on the sofa to
                    Fall Out Boy. When around each other, expect to hear
                    terrible Australian accents, as well as the phrases 'Awww
                    yeah' and 'Ya drongo' used frequently.
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
                  Sophie and Steph met when Sophie patiently trained Steph in
                  the ways of floor managing all the way back in 2016 and
                  quickly became firm friends. Sharing their interest in live
                  comedy and travel, they loved going to the Fringe Festival in
                  Edinburgh (although covid put a stop to that!) Sophie clearly
                  took leave of her senses when she agreed to move in with Steph
                  and James and spent nearly 4 years being the best housemate,
                  argument adjudicator, and covid buddy anyone could ask for.
                  When it was time for James to propose, Sophie was instrumental
                  in organising the proposal and double checking the ring!
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
                    The oldest niece of the bride, Grace and Steph share a love
                    of tv, theatre, and mocking Sammi at every available
                    opportunity! Grace is a fantastic niece, all round brilliant
                    person, and has been hounding Steph to settle down for so
                    long, she had to be a bridesmaid!
                  </p>
                </div>
                <div className="member">
                  <h4>John Booker</h4>
                  <img src={jon} />
                  <p>
                    John is one of Steph’s oldest friends, meeting in first year
                    of University they became more like siblings than friends.
                    After playing silly pranks on each other, mostly John on
                    Steph, too many nights out, and the occasional session in
                    the library, John and Steph were best idiots forever! 13
                    years later, after many trips up and down the country to see
                    each other and support each other's lives, Steph could not
                    imagine walking down the aisle without John there to mock
                    her the whole way (and maybe say something supportive!)
                  </p>
                </div>
                <div className="member">
                  <h4>Sam Neuchterlien</h4>
                  <img src={sam} />
                  <p>
                    Another University survivor, Sam and Steph connected via a
                    Facebook group (remember them?!) before starting way back in
                    2009 and the rest was history. They share a love of the
                    theatre, art, Eurovision, and love to sing songs from
                    musicals and the 90s (mostly in key!) From the dreadful uni
                    houses in Chester to trips to New York and Amsterdam and
                    everything in between, they have laughed the whole way
                    through.
                  </p>
                </div>
                <div className="member">
                  <h4>Stacey Lottes</h4>
                  <img src={stacey} />
                  <p>
                    Stacey made a lasting impression on Steph the first time
                    they met by shouting at a notoriously annoying lighting guy!
                    Then years later, they moved onto the same shift and have
                    been friends ever since. They have shared many drunken times
                    together, including a trip to Brussels, many bbq's, and
                    Christmas dinners! Stacey has always been amazing to Steph
                    and even had the patience to train Steph in the ways of
                    directing.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="extra">
            <div className="single-extra">
              <h3>Master of Ceremonies:</h3>
              <h4>Harriet Sharp</h4>
              <img src={harri} />
              <p>
                Harriet and Steph started at QVC around the same time, bonding
                over a love of wine, 90's music, and being fancy B's. Harriet
                quit the Q to become a successful freelance Art Director and an
                all round amazing person but the wine nights continued. Steph
                and James really wanted a Master of Ceremonies they knew and
                could think of no one better for the job!
              </p>
            </div>
            <div className="single-extra">
              <h3>Flower Girl:</h3>
              <h4>Maisie Madge</h4>
              <img src={maisie} />
              <p>
                The youngest niece of the Bride, Maisie, is a ball of energy and
                fun. Steph would love to think that she is the favourite, but
                clearly it’s James. After a recent family trip to Center Parcs,
                James spent hours playing games with her, cementing his position
                as the favourite Uncle. So on the day be prepared for her to be
                running up the aisle to James!
              </p>
            </div>
            <div className="double-extra">
              <h3>Family Members:</h3>
              <div className="extra-content">
                <div className="extra-side">
                  <h3>Mother of the Groom:</h3>
                  <h4>Edel Greenwood</h4>
                  <img src={mum} />
                  <h3>Father of the Groom:</h3>
                  <h4>Ian Rogers</h4>
                  <img src={dad} />
                </div>
                <div className="extra-side">
                  <h3>Parents of the Bride:</h3>
                  <h4>Stephen and Angela Pymm</h4>
                  <img src={pymms} />
                  <h3>Brother of the Bride:</h3>
                  <h4>Matthew Pymm</h4>
                  <img src={matt} />
                </div>
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
