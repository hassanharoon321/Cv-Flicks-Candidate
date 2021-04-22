import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PersonalDetails.css";

function PersonalDetails() {
  const [nationality, setNationality] = useState([]);
  const [country, setCountry] = useState([]);
  const [martialStatus, setMartialStatus] = useState([]);

  useEffect(() => {
    axios
      .get("http://142.93.49.103/cv-tube/api.v.1/user/add_personal_get.php", {
        headers: {
          auth_id: "cVcWAlw208msIBwSng==",
        },
      })
      .then((response) => {
        setMartialStatus(response.data.data.marital_statuses);
        setNationality(response.data.data.nationality);
        setCountry(response.data.data.countries);
        console.log(response.data.data)
      })
      .catch((error) => {
        console.log(error, "error");
      });
  }, []);

  return (
    <div className="personal-details-parent">
      <h1 className="per-det-color">Personal Details</h1>
      <p className="per-det-color">
        Providing your personal information helps Employers to reach our quickly
      </p>
      <div className="per-det-sub-parent">
        <div className="per-det-child-01">
          <div className="per-det-sub-child-01">
            <label className="per-det-full-name-label">Full name</label>
            <input
              type="text"
              name=""
              id=""
              className="full-name-input-per-det"
              placeholder="Type your full name"
            />
            <label className="per-det-date-of-birth-label">Date of Birth</label>
            <input
              type="date"
              name=""
              id=""
              className="full-name-input-per-det"
            />
            <label className="per-det-date-of-birth-label">Gender</label>
            <div className="per-det-parent-btn-div">
              <input
                type="radio"
                id="yes"
                name="yes"
                value="yes"
                className="male-cur"
              />
              <label className="male-padding">Male</label>
              <input
                type="radio"
                id="no"
                name="yes"
                value="no"
                className="female-radio-pers"
              />
              <label className="female-lanle">Female</label>
            </div>
            <label className="per-det-date-of-birth-label">Email address</label>
            <input
              type="email"
              name=""
              id=""
              className="full-name-input-per-det"
              placeholder="Enter your email address"
            />
            <label className="per-det-date-of-birth-label">Phone Number</label>
            <div className="phone-num-div">
              <select name="" id="" className="phone-num-code-input-1">
                <option value="">+92</option>
              </select>
              <input
                type="number"
                className="phone-num-code-input-2"
                placeholder="Mobile Number"
              />
            </div>
          </div>
          <div className="per-det-sub-child-02">
            <label className="per-det-lang-label">Languages</label>
            <select name="" id="" className="per-det-lang-input">
              <option value="">Type Your Language Known (max 3)</option>
            </select>
            <label className="per-det-nationality-label">Nationality</label>
            <select name="" id="" className="per-det-lang-input">
              <option value="">Select Your Nationality</option>
              {nationality.map((nat) => (
                <option key={nat.id}>{nat.nat_name}</option>
              ))}
            </select>
            <label className="per-det-nationality-label">Country</label>
            <select name="" id="" className="per-det-lang-input">
              <option value="">Pakistan</option>
              {country.map((count) => (
                <option key={count.id}>{count.co_name}</option>
              ))}
            </select>
            <label className="per-det-nationality-label">City</label>
            <select name="" id="" className="per-det-lang-input">
              <option value="">Karachi</option>

            </select>
            <label className="per-det-nationality-label">Martial Status</label>
            <select name="" id="" className="per-det-lang-input">
              {martialStatus.map((marStatus) => (
                <option key={marStatus.id}>{marStatus.m_name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="per-det-child-02">
          <button className="per-det-save-and-btn">Save and Continue</button>
        </div>
      </div>
    </div>
  );
}

export default PersonalDetails;
