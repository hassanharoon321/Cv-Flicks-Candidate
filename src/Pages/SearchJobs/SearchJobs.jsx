import React from "react";
import { Link } from "react-router-dom";
import LocationIcon from "../../Assests/Location.svg";
import SearchIcon from "../../Assests/Search.svg";
import Briefcase from "../../Assests/topmanagment/briefcase.svg";
import RecentSearches from "../../Assests/RecentSearches.svg";
import GooglePlay from "../../Assests/play-google.svg";
import AppStore from "../../Assests/app-store.svg";
import facebook from "../../Assests/facebook.png";
import instagram from "../../Assests/Instagram.png";
import linkedIn from "../../Assests/linkedin.png";
import "./SearchJobs.css";

function SearchJobs() {
  return (
    <div className="search-jobs-parent">
      <div className="search-jobs-div">
        <div className="search-jobs-child-01">
          <h1 className="search-jobs-head">Search For Jobs</h1>
          <p className="para-search-head">
            Enter the following info to get the most suitable jobs
          </p>
        </div>
        <div className="search-jobs-child-02">
          <div className="user-search-back">
            <div className="search-icon-jobs-01">
              <img src={SearchIcon} alt="" />
            </div>
            <input
              type="text"
              className="search-jobs-input"
              placeholder="Key skills, Designation, Company or Work Experience"
            />
            <div className="search-icon-jobs">
              <img src={LocationIcon} alt="" />
            </div>
            <input
              type="text"
              className="search-jobs-input-02"
              placeholder="Location"
            />
            <div className="search-icon-jobs">
              <img src={Briefcase} alt="" />
            </div>
            <input
              type="text"
              className="search-jobs-input-03"
              placeholder="Work Experience (in years)"
            />

            <button className="search-btn-jobs">
              <Link to="search-results" className="def-sty-search-jobs">SEARCH</Link>
            </button>
          </div>
        </div>
        <div className="recent-jobs-search">
          <p className="recent-search-head">Recent Searches:</p>
          {/* APi Start here */}
          <div className="recent-searches-child">
            <section className="recent-search-icon-div">
              <img src={RecentSearches} alt="" />
            </section>
            <section className="search-main-jobs-title">
              <p className="search-color-jobs">graphic design</p>
            </section>
          </div>
          {/* APi ENds here */}
          {/* APi Start here */}
          <div className="recent-searches-child">
            <section className="recent-search-icon-div">
              <img src={RecentSearches} alt="" />
            </section>
            <section className="search-main-jobs-title">
              <p className="search-color-jobs">top managment</p>
            </section>
          </div>
          {/* APi ENds here */}
          {/* APi Start here */}
          <div className="recent-searches-child">
            <section className="recent-search-icon-div">
              <img src={RecentSearches} alt="" />
            </section>
            <section className="search-main-jobs-title">
              <p className="search-color-jobs">It Specalist</p>
            </section>
          </div>
          {/* APi ENds here */}
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

export default SearchJobs;
