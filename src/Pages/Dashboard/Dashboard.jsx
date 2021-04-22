import React from "react";
import DashboardBack from "../../Assests/dashboard-back.png";
import { Link } from "react-router-dom";
import SearchIcon from "../../Assests/Search.svg";
import LocationIcon from "../../Assests/Location.svg";
import UserIcon from "../../Assests/user.svg";
import Banner from "../../Assests/banner.png";
import GooglePlay from "../../Assests/play-google.svg";
import AppStore from "../../Assests/app-store.svg";
import facebook from "../../Assests/facebook.png";
import instagram from "../../Assests/Instagram.png";
import linkedIn from "../../Assests/linkedin.png";

import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-parent">
      <div className="dashboard-image-div">
        <img src={DashboardBack} className="dashboard-image-size" />
        {/* Search Starts */}
        <div className="home-search-parent">
          <h3 className="search-for-avail-color-home">Welcome Back User</h3>
          <div className="box-of-search-home">
            <section className="search-icon-home">
              <img src={SearchIcon} />
            </section>
            <input
              type="text"
              className="search-input-home"
              placeholder="Key skills, Designation, Company or Work Experience"
            />
            <section className="search-icon-home-2">
              <img src={LocationIcon} />
            </section>
            <input
              type="text"
              className="search-input-home"
              placeholder="Location"
            />

            <button className="submit-btn-home">
              <Link to="search-jobs" className="def-home-link">
                SEARCH
              </Link>
            </button>
          </div>
        </div>
        {/* Search Ends */}

        {/* Profile Starts */}
        <div className="user-profile-main-div">
          <section className="description">
            <section className="user-icon">
              <img src={UserIcon} className="user-img-dash" />
            </section>
            <section className="description-text">
              <h4 className="current-user-name">Mohammad Wajahad</h4>
              <p className="profession">Graphics Designer</p>
            </section>
          </section>
          <section className="completed-updated">
            <h1 className="heading-profile">
              5<small className="profile-completed">% Profile Complete</small>
            </h1>
            <small className="updated-today">Updated Today</small>
          </section>
          <progress
            max="100"
            value="20"
            className="profile-progress"
          ></progress>

          <section className="complete-profile-now">
            <h5 className="comp-prof">Complete your profile now!</h5>
            <p className="oppo">
              You are missing out Opportounities Complete Your Profile will make
              it easier to show up in search
            </p>
          </section>

          <section className="prof-imp-main">
            <h5 className="prof-imp">Profile Impression</h5>
            <p className="prof-search">
              Number of times your Profile Showed up on search
            </p>
          </section>

          <span className="count">
            <section className="search-apperances">
              00 Search Apperances
            </section>

            <section className="clicks-on-profile">
              00 Clicks on Profile
            </section>
          </span>
        </div>
        {/* Profile Ends */}

        {/* JOb Alert Strarts */}
        <div className="job-alert-main-div">
          <div>
            <h2 className="job-alert-head">Looking for a specific job?</h2>
            <p className="job-alert-para">
              Create a Job Alert! We will notify you whenever there is a new job
              that is suitable for you.
            </p>
          </div>
          <div>
            <button className="job-alert-btn">
              <Link to="create-job-alert" className="def-home-link">
                Craete a Job Alert
              </Link>
            </button>
          </div>
        </div>
        {/* JOb Alert Ends */}
      </div>
      <div className="profile-view-btn-main">
        <button className="prof-view-btn-1">
          <Link to="profile-viewed" className="default-style-a-tag">
            Profile Viewed <span className="button-num-text">00</span>
          </Link>
        </button>
        <button className="prof-view-btn-2">
          <Link to="cv-shortlisted" className="default-style-a-tag">
          CV Shortlisted <span className="button-num-text">00</span>
          </Link>
        </button>
      </div>
      <div className="recent-jobs-main-div">
        <h1 className="recent-jobs-head-dash">Recent Jobs</h1>
        <div className="recent-jobs-main-div-overflow">
          {/* Map Api STarts Here */}
          <div className="recent-jobs-map-div">
            <div className="map-recent-jobs-01">
              <Link to="job-details" className="default-style-a-tag">
                <h4 className="grap-head-01">Graphics Design</h4>
                <small className="grap-small-01">Technsym</small>
                <div className="location-icon-map-main">
                  <img src={LocationIcon} />
                  <span className="location-map-para">Karachi, Pakistan</span>
                </div>
              </Link>
            </div>
            <div className="map-recent-jobs-02">
              <h4 className="grap-head-01">Graphics Design</h4>
              <small className="grap-small-01">Technsym</small>
              <div className="location-icon-map-main">
                <img src={LocationIcon} />
                <span className="location-map-para">Karachi, Pakistan</span>
              </div>
            </div>
          </div>
          {/* Map Api Ends Here */}
          {/* Map Api STarts Here */}
          <div className="recent-jobs-map-div">
            <div className="map-recent-jobs-01">
              <h4 className="grap-head-01">Graphics Design</h4>
              <small className="grap-small-01">Technsym</small>
              <div className="location-icon-map-main">
                <img src={LocationIcon} />
                <span className="location-map-para">Karachi, Pakistan</span>
              </div>
            </div>
            <div className="map-recent-jobs-02">
              <h4 className="grap-head-01">Graphics Design</h4>
              <small className="grap-small-01">Technsym</small>
              <div className="location-icon-map-main">
                <img src={LocationIcon} />
                <span className="location-map-para">Karachi, Pakistan</span>
              </div>
            </div>
          </div>
          {/* Map Api Ends Here */}
          {/* Map Api STarts Here */}
          <div className="recent-jobs-map-div">
            <div className="map-recent-jobs-01">
              <h4 className="grap-head-01">Graphics Design</h4>
              <small className="grap-small-01">Technsym</small>
              <div className="location-icon-map-main">
                <img src={LocationIcon} />
                <span className="location-map-para">Karachi, Pakistan</span>
              </div>
            </div>
            <div className="map-recent-jobs-02">
              <h4 className="grap-head-01">Graphics Design</h4>
              <small className="grap-small-01">Technsym</small>
              <div className="location-icon-map-main">
                <img src={LocationIcon} />
                <span className="location-map-para">Karachi, Pakistan</span>
              </div>
            </div>
          </div>
          {/* Map Api Ends Here */}
        </div>
        <div className="view-more-div-main">
          <span className="view-more-map">View More</span>
        </div>
      </div>
      {/* Banner Starts */}
      <div className="banner-image-main-dash">
        <img src={Banner} className="banner-img-dash" />
      </div>
      {/* Banner Ends */}

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

export default Dashboard;
