import React from "react";
import OkIcon from "../../Assests/ok-icon.svg";
import WrongIcon from "../../Assests/wrong-icon.svg";
import "./GetPremium.css";
import GooglePlay from "../../Assests/play-google.svg";
import AppStore from "../../Assests/app-store.svg";
import facebook from "../../Assests/facebook.png";
import instagram from "../../Assests/Instagram.png";
import linkedIn from "../../Assests/linkedin.png";

function GetPremium() {
  return (
    <div className="get-premium-parent">
      <div className="get-premium-head">
        <h1 className="price-heading">Plans & Pricing</h1>
      </div>
      <div className="pricing-div-main">
        <section className="standard">
          <div className="stan-head-div">
            <h2 className="head-stan">Standard</h2>
          </div>
          <div className="stan-main-content">
            <section className="stan-main-01">
              <div className="stand-icon">
                <img src={OkIcon} />
              </div>
              <div className="num-stan">
                <p className="para-text-stan">02</p>
              </div>
              <div className="stan-text">
                <p className="video-stan-head">Video Resumes</p>
              </div>
            </section>
            <section className="stan-main-02">
              <div className="stand-icon">
                <img src={OkIcon} />
              </div>
              <div className="num-stan">
                <p className="para-text-stan">01</p>
              </div>
              <div className="stan-text">
                <p className="video-stan-head">Daily Job Apply</p>
              </div>
            </section>
            <section className="stan-main-03">
              <div className="stand-icon">
                <img src={OkIcon} />
              </div>
              <div className="num-stan">
                <p className="para-text-stan">10</p>
              </div>
              <div className="stan-text">
                <p className="video-stan-head">Job Views</p>
              </div>
            </section>
            <section className="stan-main-04">
              <div className="stand-icon">
                <img src={WrongIcon} />
              </div>
              <div className="num-stan">
                <p className="para-text-stan">02</p>
              </div>
              <div className="stan-text">
                <p className="video-stan-head">International Apply</p>
              </div>
            </section>
            <h2 className="cash-size">
              $5 <small className="cash-month-size">/month</small>{" "}
            </h2>
            <button className="btn-buy-now">Buy Now</button>
          </div>
        </section>
        <section className="premium">
          <div className="stan-head-div">
            <h2 className="head-stan">Premium</h2>
          </div>
          <div className="stan-main-content">
            <section className="stan-main-01">
              <div className="stand-icon">
                <img src={OkIcon} />
              </div>
              <div className="num-stan">
                <p className="para-text-stan">02</p>
              </div>
              <div className="stan-text">
                <p className="video-stan-head">Video Resumes</p>
              </div>
            </section>
            <section className="stan-main-02">
              <div className="stand-icon">
                <img src={OkIcon} />
              </div>
              <div className="num-stan">
                <p className="para-text-stan">01</p>
              </div>
              <div className="stan-text">
                <p className="video-stan-head">Daily Job Apply</p>
              </div>
            </section>
            <section className="stan-main-03">
              <div className="stand-icon">
                <img src={OkIcon} />
              </div>
              <div className="num-stan">
                <p className="para-text-stan">10</p>
              </div>
              <div className="stan-text">
                <p className="video-stan-head">Job Views</p>
              </div>
            </section>
            <section className="stan-main-04">
              <div className="stand-icon">
                <img src={OkIcon} />
              </div>
              <div className="num-stan">
                <p className="para-text-stan">02</p>
              </div>
              <div className="stan-text">
                <p className="video-stan-head">International Apply</p>
              </div>
            </section>
            <h2 className="cash-size">
              $10 <small className="cash-month-size">/month</small>{" "}
            </h2>
            <button className="btn-buy-now">Buy Now</button>
          </div>
        </section>
        <section className="enterprise">
          <div className="stan-head-div">
            <h2 className="head-stan">Enterprise</h2>
          </div>
          <div className="stan-main-content">
            <section className="stan-main-01">
              <div className="stand-icon">
                <img src={OkIcon} />
              </div>
              <div className="num-stan">
                <p className="para-text-stan">02</p>
              </div>
              <div className="stan-text">
                <p className="video-stan-head">Video Resumes</p>
              </div>
            </section>
            <section className="stan-main-02">
              <div className="stand-icon">
                <img src={OkIcon} />
              </div>
              <div className="num-stan">
                <p className="para-text-stan">01</p>
              </div>
              <div className="stan-text">
                <p className="video-stan-head">Daily Job Apply</p>
              </div>
            </section>
            <section className="stan-main-03">
              <div className="stand-icon">
                <img src={OkIcon} />
              </div>
              <div className="num-stan">
                <p className="para-text-stan">10</p>
              </div>
              <div className="stan-text">
                <p className="video-stan-head">Job Views</p>
              </div>
            </section>
            <section className="stan-main-04">
              <div className="stand-icon">
                <img src={OkIcon} />
              </div>
              <div className="num-stan">
                <p className="para-text-stan">02</p>
              </div>
              <div className="stan-text">
                <p className="video-stan-head">International Apply</p>
              </div>
            </section>
            <h2 className="cash-size">
              $20 <small className="cash-month-size">/month</small>{" "}
            </h2>
            <button className="btn-buy-now">Buy Now</button>
          </div>
        </section>
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

export default GetPremium;
