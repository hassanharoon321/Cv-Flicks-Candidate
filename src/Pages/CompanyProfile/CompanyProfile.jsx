import React from "react";
import "./CompanyProfile.css";
import GooglePlay from "../../Assests/play-google.svg";
import AppStore from "../../Assests/app-store.svg";
import facebook from "../../Assests/facebook.png";
import instagram from "../../Assests/Instagram.png";
import linkedIn from "../../Assests/linkedin.png";

function CompanyProfile() {
  return (
    <div className="company-profile-parent">
      <div className="company-det-div">
        <div className="company-profile-pic">
          <div className="profile-pic-company"></div>
        </div>
        <div className="comp-det-profile">
          <h2 className="color-head-tech">Technsym</h2>
          <p className="color-head-para">
            Providing all your Developments needs
          </p>
          <p className="color-head-para-light">
            Karachi, Pakistan Information Technology
          </p>
        </div>
      </div>
      <div className="all-details-main-company">
        <div className="main-comp-child-01">
          <div className="main-comp-sub-child-01">
            <h2 className="heading-main-comp-sub-child">About Us</h2>
            <div className="about-desc-content">
              <p className="company-profile-about-para">
                Technysm is a hybrid technology firm that specializes in
                providing multiple solutions catering to the needs of businesses
                of every scale across the globe. Solutions ranging from website
                development, mobile application development, ERP system creation
                and installation, explainer video, storyboard illustration,
                media animation, digital marketing, social media marketing, and
                online media buying, we have proficient developers and marketers
                to develop meaningful brands and keep them supported through
                advanced software accessories. Technysm is a hybrid technology
                firm that specializes in providing multiple solutions catering
                to the needs of businesses of every scale across the globe.
                Solutions ranging from website development, mobile application
                development, ERP system creation and installation, explainer
                video, storyboard illustration, media animation, digital
                marketing, social media marketing, and online media buying, we
                have proficient developers and marketers to develop meaningful
                brands and keep them supported through advanced software
                accessories.
              </p>
            </div>
          </div>
          <div className="main-comp-sub-child-02">
            <div className="main-comp-tit-child-01">
              <p className="main-tit-head">Website</p>
              <small className="main-tit-head-02">www.technysm.com</small>
            </div>
            <div className="main-comp-tit-child-02">
              <p className="main-tit-head">Industry</p>
              <small className="main-tit-head-02">Information Technology</small>
            </div>
            <div className="main-comp-tit-child-03">
              <p className="main-tit-head">Company Size</p>
              <small className="main-tit-head-02">5 - 10 employees</small>
            </div>
            <div className="main-comp-tit-child-04">
              <p className="main-tit-head">Headquarters</p>
              <small className="main-tit-head-02">Karachi, Sindh</small>
            </div>
            <div className="main-comp-tit-child-05">
              <p className="main-tit-head">Founded</p>
              <small className="main-tit-head-02">2015</small>
            </div>
          </div>
          <div></div>
        </div>
        <div className="main-comp-child-02">
          <div className="comp-profile-main-div">
            <h2 className="latest-jobs-color-profile">Latest Jobs</h2>
            <div className="comp-profile-latest-jobs">
              {/* Latest Jobs API Starts here */}
              <div className="latest-jobs-01">
                <div className="latest-job-detail">
                  <p className="job-detail-comp-para">Hiring MS Dynamic CRM Developer (Technical) - Ajman</p>
                  <small className="company-name-profile-main">Technysm</small>
                </div>
                <div className="latest-job-date">
                  <small className="date-of-job-posted">Posted on 02 Feb, 2021</small>
                </div>
              </div>
              {/* Latest Jobs API Ends here */}
            </div>
          </div>
        </div>
      </div>
      {/* Footer Starts Here */}
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
      {/* Footer Ends Here */}
    </div>
  );
}

export default CompanyProfile;
