import React from "react";
import OkIcon from "../../Assests/tick.svg";
import "./AppliedSuccess.css";

function AppliedSuccess() {
  return (
    <div className="applied-success-parent">
      <div className="applied-alert">
        <div className="ok-icon-text">
          <img src={OkIcon} alt="" />
          <h3 className="job-app-head">Job Applied!</h3>
        </div>
        <p className="job-app-para">
          Your Video CV is uploaded and sent to the employer. Please wait up to
          4 days for a response.
        </p>
        <p className="job-app-para">Click proceed to check your progress.</p>
        <button className="proceed-btn-01">Proceed</button>
      </div>
    </div>
  );
}

export default AppliedSuccess;
