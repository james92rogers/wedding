import React from "react";
import castle from "../assets/Cooling-Castle-Barn.jpg";

const Where = () => {
  return (
    <div className="where-page">
      <div className={"image"}>
        <img src={castle} alt={"Cooling Castle Barn"} />
      </div>
      <div className={"text"}>
        <div className={"address"}>
          <p>Cooling Castle Barn</p>
          <p>Main Rd, Cooling,</p>
          <p>Rochester ME3 8DT</p>
        </div>
        <div className={"travel"}>
          <p>
            Twenty minute drive from Chatham, Rochester & Gillingham Stations
          </p>
        </div>
      </div>
    </div>
  );
};

export default Where;
