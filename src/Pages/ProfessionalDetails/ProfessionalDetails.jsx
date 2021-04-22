import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProfessionalDetails.css";

function ProfessionalDetails() {
  const [currentIndustry, setCurrentIndustry] = useState([]);
  const [functionalArea, setFunctionalArea] = useState([]);
  const [currentWorkLevel, setCurrentWorkLevel] = useState([]);
  const [salaryPerAnum, setSalaryPerAnum] = useState([]);
  const [availibility, setAvailibility] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);
  const [recruiterCity, setRecruitersCity] = useState([]);
  const [tryToHide, setTryToHide] = useState("child-div-main");

  useEffect(() => {
    axios
      .get(
        "http://142.93.49.103/cv-tube/api.v.1/user/edit_professional_detail.php",
        {
          headers: {
            auth_id: "cVcWAlw208msIBwSng==",
          },
        }
      )
      .then((response) => {
        setCurrentIndustry(response.data.data.industry);
        setFunctionalArea(response.data.data.functional_area);
        setCurrentWorkLevel(response.data.data.work_level);
        setSalaryPerAnum(response.data.data.salary_per_annum);
        setAvailibility(response.data.data.availablity);
        setWorkExperience(response.data.data.experience_level);
        setRecruitersCity(response.data.data.employer_city);
      })
      .catch((error) => {
        console.log(error, "error");
      });
  }, []);

  const yesOrNoHideForms = (e) => {
    if (e.target.value === "yes") {
      setTryToHide("child-div-main unhide");
    } else if (e.target.value === "no") {
      setTryToHide("child-div-main hide");
    }
  };

  return (
    <div className="professional-detail-parent">
      <h1 className="prof-det-head-color">Professional Details</h1>
      <p className="prof-det-head-color">
        Providing your educational information helps Employers know if you are
        eligible for the job
      </p>
      <div className="prof-detail">
        <div className="prof-detail-parent-child-01">
          <div className="prof-child-01">
            <label className="current-industry-label">Current Industry</label>
            <select name="" id="" className="current-industruy-input">
              <option value="">Select Your Current Industry</option>
              {currentIndustry.map((indus) => (
                <option key={indus.cat_id}>{indus.cat_name}</option>
              ))}
            </select>
            <label className="current-functional-area-label">
              Current Functional Area
            </label>
            <select name="" id="" className="current-functional-area">
              <option value="">Select Your Functional Area</option>
              {functionalArea.map((funcArea) => (
                <option key={funcArea.id}>{funcArea.name}</option>
              ))}
            </select>
            <label className="current-work-exp-label">Current Work Level</label>
            <select name="" id="" className="current-work-exp-input">
              <option value="">Select Your Current Work Level</option>
              {currentWorkLevel.map((workLevel) => (
                <option key={workLevel.id}>{workLevel.work_level}</option>
              ))}
            </select>
            <label className="salary-per-anum-label">Salary Per Annum</label>
            <select name="" id="" className="salary-per-anum-category">
              <option value="">Upto $50,000</option>
              {salaryPerAnum.map((salary) => (
                <option key={salary.id}>{salary.name}</option>
              ))}
            </select>
            <label className="availibility-label">Availibility</label>
            <select name="" id="" className="availibility-category">
              <option value="">Availibility Immidetaily</option>
              {availibility.map((aval) => (
                <option key={aval.id}>{aval.name}</option>
              ))}
            </select>
            <label className="availibility-label">Total Work Experience</label>
            <select name="" id="" className="availibility-category">
              <option value="">Select Your Work Experience</option>
              {workExperience.map((exp) => (
                <option key={exp.id}>{exp.name}</option>
              ))}
            </select>
          </div>
          <div className="prof-child-02" onChange={yesOrNoHideForms}>
            <label className="currently-working-label">
              Currently Working?
            </label>
            <div className="prof-det-radio-2">
              <input type="radio" id="yes" name="yes" value="yes" className="for-cur"/>
              <label className="prof-det-yes">Yes</label>
              <input
                type="radio"
                id="no"
                name="yes"
                value="no"
                className="prof-det-input-round"
              />
              <label className="prof-det-yes">No</label>
            </div>
            <section className={tryToHide}>
            <label className={"designation-or-title-label"}>
              Designation or Title
            </label>
            <input
              type="text"
              placeholder="Enter your previous designation"
              className="designation-input"
            />
            <label className="designation-or-title-label">
              Recruiters Name
            </label>
            <input
              type="text"
              placeholder="Enter your previous employer's name"
              className="designation-input"
            />
            <label className="designation-or-title-label">
              Recruiters City
            </label>
            <select name="" id="" className="designation-input">
              <option value="">Karachi</option>
              {recruiterCity.map((city) => (
                <option key={city.id}>{city.name}</option>
              ))}
            </select>
            <label className="designation-or-title-label">Working Period</label>
            <input
              type="date"
              placeholder="ex. 03/2018 - 03/2020"
              className="designation-input"
            />
            </section>
          </div>
        </div>
        <div className="prof-detail-parent-child-02">
          <button className="prof-det-save-and-cont">Save and Continue</button>
        </div>
      </div>
    </div>
  );
}

export default ProfessionalDetails;
