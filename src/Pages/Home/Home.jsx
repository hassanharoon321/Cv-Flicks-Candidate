import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home.css";
import homeImage from "../../Assests/home.png";
import SearchIcon from "../../Assests/Search.svg";
import LocationIcon from "../../Assests/Location.svg";
import SmallLocationIcon from "../../Assests/home-location.svg";
import BannerImage from "../../Assests/banner.png";
import Footer from "../../Components/Footer/Footer";

function Home() {
  const [jobsByIndustry, setJobsByIndustry] = useState([]);
  const [recentJobs, setRecentJobs] = useState([]);

  useEffect(() => {
    axios
      .get("http://142.93.49.103/cv-tube/api.v.1/user/web_home.php")
      .then((response) => {
        setJobsByIndustry(response.data.data.jobs_by_industry);
        setRecentJobs(response.data.data.recent_jobs);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error, "error");
      });
  }, []);

  return (
    <div className="home-parent">
      <div className="home-image">
        <img src={homeImage} alt="" className="img-back-home" />
        <div className="home-search-parent">
          <h3 className="search-for-avail-color-home">
            Search from 43,231 available jobs
          </h3>
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
        <div className="jobs-by-title-home">
          <h2 className="title-of-jobs-color">Jobs by Industry</h2>
          <div className="jobs-title-row-parent">
            {/* Row 1 Starts */}
            {jobsByIndustry.map((allJobs) => (
              <div className="jobs-title-row-1" key={allJobs.id}>
                <Link to="top-managment" className="def-home-manag">
                  <p className="sub-title-main">
                    {allJobs.name}{" "}
                    <span className="change-brackets-color">
                      ({allJobs.job_count})
                    </span>
                  </p>
                </Link>
              </div>
            ))}
            {/* Row 1 endss */}
          </div>
        </div>
      </div>

      {/* Something Start */}
      <div className="recent-search">
        <h2 className="recent-head-color">Recent Jobs</h2>
        <div className="show-jobs-title-main-div">
          {/* Row start here */}
          {recentJobs.map((jobsDetails) => (
            <div className="show-jobs-title-row-1">
              <div className="show-jobs-box-1">
                <h3 className="main-head-jiobs">{jobsDetails.title}</h3>
                <small className="tech-color-home">{jobsDetails.rec}</small>
                <div className="icon-with-loc-home">
                  <img
                    src={SmallLocationIcon}
                    className="location-space-home"
                  />
                  <small className="location-space-home">
                    {jobsDetails.city} ,{jobsDetails.country}
                  </small>
                </div>
              </div>
            </div>
          ))}
          {/* Row end here */}
        </div>
      </div>
      {/* Something Ends */}

      <div className="image-of-banner-home">
        <img src={BannerImage} className="banner-image-01" />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
