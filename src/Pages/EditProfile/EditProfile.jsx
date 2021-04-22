import React from "react";
import Location from "../../Assests/edit-profile/Location.svg";
import Email from "../../Assests/edit-profile/email.svg";
import Phone from "../../Assests/edit-profile/phone.svg";
import "./EditProfile.css";

function EditProfile() {
  return (
    <div className="edit-profile-parent">
      {/* User Info Starts */}
      <div className="user-info-profile">
        <section className="user-profile-pic"></section>
        <section className="name-designation-test">
          <h1 className="profile-name">Mohammad Wajahat</h1>
          <p className="profile-desig">Graphics Designer</p>
          <div className="address-info">
            <section className="profile-info-01">
              <img src={Location} alt="" className="loc-icon-profile" />
              <small className="loc-profile-01">Karachi, Pakistan</small>
            </section>
            <section className="profile-info-02">
              <img src={Email} alt="" className="loc-icon-profile" />
              <small className="loc-profile-01">mwgraphicy@gmail.com</small>
            </section>
            <section className="profile-info-03">
              <img src={Phone} alt="" className="loc-icon-profile" />
              <small className="loc-profile-01">+92 332 2995313</small>
            </section>
          </div>
        </section>
      </div>
      {/* User Info Ends */}
      {/* Headline div Starts */}
      <div className="section-profile-02">
        <p>Headline</p>
        <p>Personal </p>
        <p>Professional</p>
        <p>Qualification</p>
        <p>Key Skills</p>
      </div>
      {/* Headline div Ends */}
      {/* Profile and video Section Starts*/}
      <div className="profile-and-video-main">
        <div className="comp-profile-main">
          <div className="profile-completed-child-01">
            <h1 className="head-profile-five">
              5<small className="per-prof-comp">% Profile Complete</small>
            </h1>
            <small className="update-today-prof">Updated Today</small>
          </div>
          <progress
            max="100"
            value="20"
            className="profile-progress"
          ></progress>
          <p className="five-pend-action">5 Pending Actions</p>
          <small className="pend-action-para">
            Here is a list of pending actions missing in your profile. Add these
            to reach a 100% completion score!
          </small>
          <section className="upload-cv-main">
            <p className="upload-cv-para">Upload your CV</p>
            <small className="upload-c-v-line">
              Upload your CV for greater visibility to your clients!
            </small>
            <button className="upload-cv-btn">Upload file</button>
          </section>
        </div>
      </div>
      {/* Profile and video Section Ends*/}
    </div>
  );
}

export default EditProfile;
