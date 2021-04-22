import React from "react";
import "./Footer.css";
import GooglePlay from "../../Assests/google-play.svg";
import AppStore from "../../Assests/app-store.svg";
import facebook from "../../Assests/facebook-icon.svg";
import instagram from "../../Assests/Instagram-icon.svg";
import linkedIn from "../../Assests/linkedIn-icon.svg";

function Footer() {
  return (
    <div className="footer-home">
      <div className="footer-one-main">
        {/* Foot 1 Starts */}
      <div className="job-seekers-foot">
        <h3>Job Seekers</h3>
        <p className="recr-top-main">Popular Searches</p>
        <small className="recr-top-main">Graphic Design Job in Karachi</small>
        <small className="recr-top-main">Video Editing Job in Karachi</small>
        <small className="recr-top-main">Accountant Jobs</small>
        <small className="recr-top-main">Fresher Jobs in Pakistan</small>
        <small className="recr-top-main">IT Interns Jobs in Karachi</small>
        <small className="recr-top-main">+9 more</small>
      </div>
      {/* Foot 1 Ends */}

      {/* Foot 2 Starts */}
      <div className="location">
        <p className="location-recr-top">Locations</p>
        <small className="recr-top-main">Jobs in Karachi</small>
        <small className="recr-top-main">Jobs in Lahore</small>
        <small className="recr-top-main">Jobs in Islamabad</small>
        <small className="recr-top-main">Jobs in Quetta</small>
        <small className="recr-top-main">Jobs in Peshawar</small>
        <small className="recr-top-main">+2 more</small>
      </div>
      {/* Foot 2 Ends */}

      {/* Foot 3 Starts */}
      <div className="candidate">
        <h3>Candidate</h3>
        <p className="recr-top-main">Job Seekers</p>
        <small className="recr-top-main">Home</small>
        <small className="recr-top-main">Dashboard</small>
        <small className="recr-top-main">My Profile</small>
        <small className="recr-top-main">Carrer Tips</small>
        <small className="recr-top-main">FAQ</small>
        <small className="recr-top-main">Mobil App</small>
      </div>
      {/* Foot 3 Ends */}

      {/* Foot 4 Starts */}
      <div className="recruiters">
        <p className="location-recr-top">Recruiters</p>
        <small className="recr-top-main">Register</small>
        <small className="recr-top-main">Login</small>
        <small className="recr-top-main">Testimonials</small>
      </div>
      {/* Foot 4 Ends */}

      {/* Footer 5 starts */}
      <div className="download-app-follow">
      <h3>Download our App</h3>
      <img src={GooglePlay} className="google-play-btn"/>
      <img src={AppStore} className="app-store-btn"/>
      <h3 className="follow-us-on">Follow Us On</h3>
      <div className="social-med-icons-foo">
        <img src={facebook} width="30px"/>
        <img src={instagram} width="30px" className="instagram-icon"/>
        <img src={linkedIn} width="30px" className="linked-in-icon"/>
      </div>
      </div>
      {/* Footer 5 ends */}
      </div>
      <div className="footer-nav">
        <hr className="horizontal-code"/>
        <div className="footer-nav-item">
          <small>Home</small>
          <small className="home-to-left-foot">About us</small>
          <small className="home-to-left-foot">Contact us</small>
          <small className="home-to-left-foot">Feedback</small>
        </div>
      </div>
    </div>
    
  );
}

export default Footer;
