import React from "react";
import "./Headlines.css";

function Headlines() {
  return (
    <div className="hello-word">
      <h1 className="headline-color">Headline</h1>
      <p className="headline-color">
        Enter your introductory bio and experiences to give a brief highlight of
        yourself to the clients
      </p>
      <div className="headlines-child-01">
        <input type="text" name="" id="" className="headline-input-01" placeholder="Type here"/>
        <button className="headline-btn-save-and-cont">Save and Continue</button>
      </div>
    </div>
  );
}

export default Headlines;
