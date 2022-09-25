import React from "react";

const TwoForm = () => {
  return (
    <div className="form">
      <form
        className="testform"
        action="https://www.actionforms.io/e/r/james-rogers-test"
        method="any"
      >
        <label htmlFor="name1">Name of Guest One:</label>
        <input id="name1" type="text" name="name1" />
        <div className="radios">
          <label htmlFor="attending1">Attendance for Guest One:</label>
          <div className="radio">
            <label htmFor="yes1">Yes</label>
            <input type="radio" id="yes1" value="yes" name="attending1" />
          </div>
          <div className="radio">
            <label htmFor="no1">No</label>
            <input type="radio" id="no1" value="no" name="attending1" />
          </div>
        </div>
        <label htmlFor="diet1">Dietary Requirements for Guest One:</label>
        <input type="text" id="diet1" name="diet1" />

        <label htmFor="name2" className="guest2">
          Name of Guest Two:
        </label>
        <input id="name2" type="text" name="name2" />
        <div className="radios">
          <label htmlFor="attending2">Attendance for Guest Two:</label>
          <div className="radio">
            <label htmlFor="yes2">Yes</label>
            <input type="radio" id="yes2" value="yes" name="attending2" />
          </div>
          <div className="radio">
            <label htmlFor="no2">No</label>
            <input type="radio" id="no2" value="no" name="attending2" />
          </div>
        </div>
        <label htmFor="diet2">Dietary Requirements for Guest Two:</label>
        <input type="text" id="diet2" name="diet2" />
        <label htmlFor="email">Contact Email:</label>
        <input type="email" id="email" name="email" />
        <input type="submit" className="submit" value="Submit" />
      </form>
    </div>
  );
};

export default TwoForm;
