import React, { useState, useEffect } from "react";
import axios from "axios";
import "./QualificationDetails.css";

function QualifcicationDetails() {
  const [years, setTotalYears] = useState([]);
  const [locations, setLocations] = useState([]);
  const [qualification, setQualification] = useState([]);
  const [undergraduate, setUndergraduate] = useState([]);
  const [bachelors, setBachelors] = useState([]);
  const [master, setMasters] = useState([]);
  const [courseType, setCourseType] = useState([]);
  // Bacheloers of Science
  const [bachelorsOfScience, setBachelorsOfScience] = useState([]);
  // Bacheloers of Commerce
  const [bachelorsOfCommerce, setBachelorsOfCommerce] = useState([]);
  // Course SPecial when it states changes
  const [courseSpecial, setCourseSpecial] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://142.93.49.103/cv-tube/api.v.1/user/add_qualification_get.php",
        {
          headers: {
            auth_id: "cVcWAlw208msIBwSng==",
          },
        }
      )
      .then((response) => {
        setUndergraduate(
          response.data.data.course_vise_education[0].qual_courses
        );
        setBachelors(response.data.data.course_vise_education[1].qual_courses);
        setMasters(response.data.data.course_vise_education[2].qual_courses);
        setTotalYears(response.data.data.years);
        setLocations(response.data.data.location);
        setQualification(response.data.data.course_vise_education);
        // Bacheloers of Science
        setBachelorsOfScience(
          response.data.data.course_vise_education[1].qual_courses[0].spec
        );
        // Bacheloers of Commerce
        setBachelorsOfCommerce(
          response.data.data.course_vise_education[1].qual_courses[1].spec
        );
      })
      .catch((error) => {
        console.log(error, "error");
      });
  }, []);

  const SelectCourseType = (e) => {
    if (e.target.value === "Undergrad") {
      {
        setCourseType(
          undergraduate.map((under) => (
            <option key={under.id}>{under.name}</option>
          ))
        );
      }
    } else if (e.target.value === "Bachelors") {
      {
        setCourseType(
          bachelors.map((bach) => <option key={bach.id}>{bach.name}</option>)
        );
      }
    } else if (e.target.value === "Masters") {
      {
        setCourseType(
          master.map((mas) => <option key={mas.id}>{mas.name}</option>)
        );
      }
    }
  };

  const SelectCourseSpecalization = (e) => {
    if (e.target.value === "Bachelors of Science") {
      setCourseSpecial(
        bachelorsOfScience.map((subSci) => (
          <option key={subSci.id}>{subSci.name}</option>
        ))
      );
    } else if (e.target.value === "Bachelors of Commerce") {
      setCourseSpecial(
        bachelorsOfCommerce.map((SubComm) => (
          <option key={SubComm.id}>{SubComm.name}</option>
        ))
      );
    }
  };

  return (
    <div className="qualiication-parent">
      <h1 className="qual-det-head-color">Qualification Details</h1>
      <p className="qual-det-head-color">
        Providing your educational information helps Employers know if you are
        eligible for the job
      </p>
      <div className="qual-det-parent-child">
        <div className="qual-det-child-01">
          <div className="qual-det-sub-child-01">
            <label className="qualification-detail-label">Qualification</label>
            <select
              className="qualification-detail-category"
              onChange={SelectCourseType}
            >
              <option value="">Select Your Qualification</option>
              {qualification.map((qual) => (
                <option key={qual.qual_id}>{qual.qual_name}</option>
              ))}
            </select>
            <label className="qualification-course-label">Course Type</label>
            <select
              className="qualification-detail-category"
              onChange={SelectCourseSpecalization}
            >
              <option value="">Select your course type </option>
              {courseType}
            </select>
            <label className="qualification-course-label">
              Course Specialization
            </label>
            <select name="" id="" className="qualification-detail-category">
              <option value="">Select your specialization</option>
              {courseSpecial}
            </select>
          </div>
          <div className="qual-det-sub-child-02">
            <label className="qualification-detail-label">Institue Name</label>
            <input
              type="text"
              placeholder="Enter Institute Name"
              className="qualification-detail-category"
            />
            <label className="qualification-course-label">
              Institute Location
            </label>
            <select name="" id="" className="qualification-detail-category">
              <option value="">Pakistan</option>
              {locations.map((location) => (
                <option key={location.id}>{location.loc_name}</option>
              ))}
            </select>
            <label className="qualification-course-label">
              Course Completion Year
            </label>
            <select name="" id="" className="qualification-detail-category">
              <option value="">Select Your Completion Year</option>
              {years.map((year) => (
                <option key={year.id}>{year.year}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="qual-det-child-02">
          <button className="qual-det-btn-save-and-cont">
            Save and Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default QualifcicationDetails;
