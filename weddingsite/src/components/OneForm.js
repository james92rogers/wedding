import React from "react";

const OneForm = () => {
  return (
    <div className="form">
      <form
        className="testform"
        action="https://www.actionforms.io/e/r/james-rogers-test"
        method="any"
      >
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" name="name" />
        <div className="radios">
          <label htmlFor="attending">Able to Attend:</label>
          <div className="radio">
            <label htmlFor="yes">Yes</label>
            <input type="radio" id="yes" value="yes" name="attending" />
          </div>
          <div className="radio">
            <label htmlFor="no">No</label>
            <input type="radio" id="no" value="no" name="attending" />
          </div>
        </div>
        <label htmlFor="diet">Dietary Requirements:</label>
        <input type="text" id="diet" name="diet" />
        <input type="submit" className="submit" value="Submit" />
      </form>
    </div>
  );
};

export default OneForm;
