import React from "react";
import "./KeySkills.css";

function KeySkills() {
  return (
    <div className="keyskills-parent">
      <h1 className="keyskills-color">Key Skills</h1>
      <p className="keyskills-color">
        Enter keywords of skills that you are experienced in
      </p>
      {/* Inside Section Work Start */}
      <section className="keyskills-child-01">
        <input type="text" name="" id="" placeholder="Enter a Keyword" className="keyskills-input-01"/>
        <hr className="keyskills-ruler" />
        <div>
          <p className="selected-keywords-para">Selected Keywords</p>
          <div className="keyskills-child-all-btn">
            <button className="keyskills-btn-graphics">Graphics Design</button>
            <button className="keyskills-btn-logo">Logo Design</button>
            <button className="keyskills-btn-video">Video Editing</button>
            <button className="keyskills-btn-social">Social Media Design</button>
          </div>
        </div>
        <button className="keyskills-btn-save-and-cont">
          Save and Continue
        </button>
      </section>
      {/* Inside Section Work End */}
    </div>
  );
}

export default KeySkills;
