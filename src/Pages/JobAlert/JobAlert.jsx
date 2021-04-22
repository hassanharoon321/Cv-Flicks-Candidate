import React from "react";
import "./JobAlert.css";
import GooglePlay from "../../Assests/play-google.svg";
import AppStore from "../../Assests/app-store.svg";
import facebook from "../../Assests/facebook.png";
import instagram from "../../Assests/Instagram.png";
import linkedIn from "../../Assests/linkedin.png";

function JobAlert() {
  return (
    <div className="job-alert-parent">
      <h1 className="job-alert-head-main">Job Alert</h1>
      <p className="job-alert-para-main">
        Create a Job Alert! We will notify you whenever there is a new job that
        is suitable for you.
      </p>
      <div className="job-alert-form-parent">
        <div className="job-alert-form-child">
          <label className="input-lable-alert">Enter skills, preferred companies, role</label>
          <input
            type="text"
            name=""
            id=""
            className="job-alert-input"
            placeholder="Type here"
          />
        </div>
        <div className="job-alert-form-child">
          <label className="input-lable-alert">Work Experience</label>
          <input
            type="text"
            name=""
            id=""
            className="job-alert-input"
            placeholder="Type here"
          />
        </div>
        <div className="job-alert-form-child">
          <label className="input-lable-alert">Willing to Relocate</label>
          <input
            type="text"
            name=""
            id=""
            className="job-alert-input"
            placeholder="Type here"
          />
        </div>
        <div className="job-alert-form-child-btn">
          <button className="save-and-cont-btn">Save & Continue</button>
        </div>
      </div>
      {/* footer Starts */}
      <div className="footer-home">
        <div className="footer-parent-1">
          <div className="footer-child-01">
            <div className="home-footer-sub-child-01">
              <h2 className="seekers">Job Seekers</h2>
              <h4 className="pop-sear">Popular Searches</h4>
              <p className="size-sm">Graphics Design Jobs in karachi</p>
              <p className="size-sm">Video Editing Jobs in Karachi</p>
              <p className="size-sm">Accountant Jobs</p>
              <p className="size-sm">Fresher Jobs in Pakistan</p>
              <p className="size-sm">IT interns jobs in Karachi</p>
              <p className="size-sm">+9 more</p>
            </div>
            <div className="home-footer-sub-child-01">
              <h4 className="foot-loc pad-lef-ho">Locations</h4>
              <p className="size-sm pad-lef-ho">Jobs in Karachi</p>
              <p className="size-sm pad-lef-ho">Jobs in Lahore</p>
              <p className="size-sm pad-lef-ho">Jobs in Islamabad</p>
              <p className="size-sm pad-lef-ho">Jobs in Quetta</p>
              <p className="size-sm pad-lef-ho">Jobs in Hyderabad</p>
              <p className="size-sm pad-lef-ho">+2 more</p>
            </div>
            <div className="home-footer-sub-child-04">
              <h2 className="seekers">Candidate</h2>
              <h4 className="pop-sear">Job Seekers</h4>
              <p className="size-sm">Home</p>
              <p className="size-sm">Dashboard</p>
              <p className="size-sm">My Profiles</p>
              <p className="size-sm">Carrer Tips</p>
              <p className="size-sm">FAQ</p>
              <p className="size-sm">Mobile App</p>
            </div>
            <div className="home-footer-sub-child-01">
              <h4 className="foot-loc">Recruiters</h4>
              <p className="size-sm">Register</p>
              <p className="size-sm">Login</p>
              <p className="size-sm">Testimonials</p>
            </div>
          </div>
          <div className="footer-child-02">
            <h3 className="give-margin-head">Download our App</h3>
            <div className="store-icon">
              <img src={GooglePlay} className="google-play-icon" />
            </div>
            <div className="apple-icon">
              <img src={AppStore} className="app-store-icon" />
            </div>
            <p className="follow-towhite">Follow us on</p>
            <div className="social-media-icons-foot">
              <div className="facebook-icon-div">
                <img src={facebook} alt="" className="social-media-icon" />
              </div>
              <div className="instagram-icon-div">
                <img src={instagram} alt="" className="social-media-icon" />
              </div>
              <div className="linkedin-icon-div">
                <img src={linkedIn} alt="" className="social-media-icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-parent-2">
          <hr className="horizontal-footer-ruler" />
          <div className="foot-nav">
            <p className="marg-to-home">Home</p>
            <p className="left-to-foot-nav marg-to-home">About Us </p>
            <p className="left-to-foot-nav marg-to-home">Contact Us</p>
            <p className="left-to-foot-nav marg-to-home">Feedback</p>
          </div>
        </div>
      </div>
      {/* footer ends */}
    </div>
  );
}

export default JobAlert;
