import React from "react";
import castle from "../assets/Cooling-Castle-Barn.jpg";
import map from "../assets/map.png";
import LoggedOut from "../components/LoggedOut";
import { getLogin } from "../helpers/auth";

const Details = () => {
  const userLoggedIn = getLogin();

  return (
    <div className="details-page">
      {userLoggedIn ? (
        <>
          <div className="image">
            <img src={castle} alt="Cooling Castle Barn" />
          </div>
          <div className="text">
            <div className="section" id="top-section">
              <h4 className="section-header">Where?</h4>
              <div className="sectionText" id="addressSection">
                <div>
                  <p className="address">
                    Both the ceremony and the reception will take place at
                    Cooling Castle Barn, located at:
                  </p>
                  <p>Cooling Castle Barn</p>
                  <p>Main Rd, Cooling,</p>
                  <p>Rochester</p>
                  <p>ME3 8DT</p>
                  <p className="venue-info">
                    The closest train stations are Chatham, Rochester, or
                    Gillingham, all of which are easily reachable from London,
                    and are all roughly twenty minutes away from the venue by
                    car.
                  </p>
                  <p className="venue-info">
                    Car parking is available on site for those who require it.
                  </p>
                </div>
                <img src={map} alt="map to Cooling Castle Barn" />
              </div>
            </div>
            <div className="section">
              <h4 className="section-header">When?</h4>
              <div className="sectionText">
                <div>
                  <p>The date of the wedding is the 11th of September 2023</p>
                  <p className="subheading">For Day Guests:</p>
                  <p>
                    The ceremony will start at 1pm, so we advise all guests to
                    arrive no later than 12.45pm
                  </p>
                  <p className="subheading">For Evening Guests:</p>
                  <p>
                    Entry for evening guests will be from 6pm onwards for the
                    reception. Light canapes will be provided in the evening.
                  </p>
                  <p className="ending">Carriages will be at 11pm</p>
                  <p>Respectfully, this is an adult-only occasion.</p>
                </div>
              </div>
            </div>
            <div className="section">
              <h4 className="section-header">Hotels</h4>
              <div className="sectionText">
                <div className="hotel-info">
                  <p>
                    There are a wide variety of hotels for people to choose from
                    if they require overnight accomodation. Some of these
                    include:
                  </p>
                  <div className="hotels">
                    <div className="hotel">
                      <p className="title">The HorseShoe and Cattle</p>
                      <p>Main Rd, Cooling</p>
                      <p>Rochester ME3 8DJ</p>
                      <p className="instructions">
                        2 minute drive or 8 minute walk away from the venue
                      </p>
                      <a
                        href="http://www.horseshoeandcastle.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Website
                      </a>
                    </div>
                    <div className="hotel">
                      <p className="title">Six Bells</p>
                      <p>181 Church Street, Cliffe</p>
                      <p>Rochester, ME3 7QD</p>
                      <p className="instructions">
                        6 minute drive away and free shuttle service to and from
                        the venue
                      </p>
                      <a
                        href="https://www.sixbellscliffe.co.uk/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Website
                      </a>
                    </div>
                    <div className="hotel">
                      <p className="title">Orchard B&B Kent</p>
                      <p>11 View Road, Cliffe Woods</p>
                      <p>Rochester, ME3 8JQ</p>
                      <p className="instructions">
                        7 minute drive away from the venue
                      </p>
                      <a
                        href="http://www.orchardcottagekent.co.uk/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Website
                      </a>
                    </div>
                  </div>
                  <div className="hotels">
                    <div className="hotel">
                      <p className="title">Travelodge Chatham Maritime</p>
                      <p>Historic Dockyard</p>
                      <p>Western Ave</p>
                      <p>Chatham ME4 4NT</p>
                      <p className="instructions">
                        17 minute drive away from venue
                      </p>
                      <a
                        href="https://www.travelodge.co.uk/hotels/598/Chatham-Maritime-hotel?utm_source=google&utm_medium=GHA_Organic&utm_campaign=GHA_Chatham%20Maritime&WT.tsrc=GHA_Organic"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Website
                      </a>
                    </div>
                    <div className="hotel">
                      <p className="title">
                        Premier Inn Chatham/Gillingham (Victory Pier)
                      </p>
                      <p>Blake Ave</p>
                      <p>Gillingham, ME7 1GB</p>
                      <p className="instructions">
                        19 minute drive away from venue
                      </p>
                      <a
                        href="https://www.premierinn.com/gb/en/hotels/england/kent/gillingham/chathamgillingham-victory-pier.html?cid=GLBC_GILVIC"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Website
                      </a>
                    </div>
                    <div className="hotel">
                      <p className="title">Macturner Suites -Chatham Waters</p>
                      <p>3, North House</p>
                      <p>Gillingham Gate Rd</p>
                      <p>Chatham, Gillingham, ME4 4RX</p>
                      <p className="instructions">
                        18 minute drive away from venue
                      </p>
                      <a
                        href="https://macturnersuites.zeevou.direct/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section">
              <h4 className="section-header">Registry</h4>
              <div className="sectionText">
                <p className="centre-text">
                  If you were considering getting us a gift to help us on our
                  way, your presence at our wedding is enough of a gift, but
                  should you wish to buy us something, we'd greatly appreciate a
                  contribution towards our dream honeymoon, which you can do{" "}
                  <a
                    href="https://www.collectionpot.com/pot/3031734/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>
                </p>
              </div>
            </div>
            <div className="section">
              <h4 className="section-header">Any Other Questions?</h4>
              <div className="sectionText">
                <p className="centre-text">
                  If you have any other questions about the day, please feel
                  free to reach out to us at pymmrogerswedding@gmail.com and we
                  shall answer your query as soon as possible.
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

export default Details;
