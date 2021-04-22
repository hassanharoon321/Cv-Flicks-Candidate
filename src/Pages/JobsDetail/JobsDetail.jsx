import React from "react";
import { Link } from "react-router-dom";
import "./JobsDetail.css";
import Briefcase from "../../Assests/topmanagment/briefcase.svg";
import Location from "../../Assests/topmanagment/location.svg";
import Pen from "../../Assests/topmanagment/pen.svg";
import Wallet from "../../Assests/topmanagment/wallet.svg";

function JobsDetail() {
  return (
    <div className="job-detail-parent">
      <div className="hiring-heading">
        <div className="hiring-one">
          <h2 className="haed-title-01">
            Hiring MS Dynamic CRM Developer (Technical) - Ajman
          </h2>
          <Link to="company-profile" className="link-def-detail">
            <p className="light-grey-title-01">Technysm</p>
          </Link>
        </div>
        <div className="job-post-date">
          <p className="job-posted-date">Posted on 02 Feb, 2021</p>
        </div>
      </div>
      <div className="job-des-detail-02">
        <div className="job-detail-icon-01">
          <div className="icon-detail-01">
            <img src={Briefcase} />
            <span className="icon-1-job-detail">2-3 Years Experience</span>
          </div>
          <div className="icon-detail-02">
            <img src={Location} />
            <span className="icon-1-job-detail">Karachi, Pakistan</span>
          </div>
          <div className="icon-detail-03">
            <img src={Pen} />
            <span className="icon-1-job-detail">Head of Media Team</span>
          </div>
          <div className="icon-detail-04">
            <img src={Wallet} />
            <span className="icon-1-job-detail">$5000 - $10,000</span>
          </div>
        </div>
        <div className="jobs-desc-detail">
          <h4 className="job-des-det">Job Description</h4>
          <p className="li-tag-small-size">
            Technysm is looking for a professional candidate for Top Management
            with strong interpersonal skills and a positive attitude!
          </p>
          <li className="li-tag-small-size">
            Create visual elements such as logos, original images, and
            illustrations to help deliver a message.
          </li>
          <li className="li-tag-small-size">
            Design creative posts for social media platforms within brand
            guidelines.
          </li>
          <li className="li-tag-small-size">
            Absorb data/ideas and translate them into artistic presentations.
          </li>
          <li className="li-tag-small-size">
            Develop different designs for printable materials.
          </li>
          <li className="li-tag-small-size">
            Develop and implement ideas for printable materials
          </li>
          <li className="li-tag-small-size">
            Review designs for errors before printing or publishing them.
          </li>
          <li className="li-tag-small-size">
            Research proper references for projects & designs that match brand
            identity.
          </li>
          <li className="li-tag-small-size">
            Generate ideas and artwork for events and campaigns.
          </li>
          <li className="li-tag-small-size">
            Design and resize google display network ads according to targeting
            standards and google ads criteria.
          </li>
          <li className="li-tag-small-size">
            Edit & Design boxes according to printing standards & brand
            principles.
          </li>
          <li className="li-tag-small-size">
            Support marketing team to develop creative solutions, while adhering
            to brand guidelines, collaborating daily with the marketing team to
            ensure brand consistency.
          </li>
        </div>
      </div>
      <div className="functional-area-div">
        <div className="func-area-01">
          <h4 className="func-area-head">Functional Area</h4>
          <p className="func-area-para">Senior Management</p>
        </div>
        <div className="func-area-02">
          <h4 className="func-area-head">Employer Details</h4>
          <p className="func-area-para">Not mentioned</p>
        </div>
      </div>
      <div className="job-detail-btn-div">
        <button className="btn-job-detail">
          <Link to="upload-cv">Apply</Link>
        </button>
      </div>
    </div>
  );
}

export default JobsDetail;
