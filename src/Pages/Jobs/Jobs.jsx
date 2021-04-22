import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Jobs.css";
import JobsBack from "../../Assests/jobs/jobs-back.png";
import Footer from "../../Components/Footer/Footer";

function Jobs() {
  const [jobsByIndustry, setJobsByIndustry] = useState([]);
  const [jobsBySkills, setJobsBySkills] = useState([]);

  useEffect(() => {
    axios
      .get("http://142.93.49.103/cv-tube/api.v.1/user/web_jobs.php")
      .then((response) => {
        setJobsByIndustry(response.data.data.by_industry);
        setJobsBySkills(response.data.data.by_skill);
        console.log(response.data.data.by_skill);
      })
      .catch((error) => {
        console.log(error, "error");
      });
  }, []);

  return (
    <div className="jobs-parent">
      <div className="jobs-image">
        <img src={JobsBack} className="image-fixed-jobs" />
        {/* Jobs By Tittle Starts */}

        <div className="jobs-by-title-jobs">
          <h2 className="title-of-jobs-color-jobs">Jobs by Industry</h2>
          <div className="jobs-title-row-parent-jobs">
            {/* Child Jobs 1 Starts */}
            {jobsByIndustry.map((jobsTitle) => (
              <div className="jobs-title-row-1-jobs" key={jobsTitle.id}>
                <p className="jobs-by-title-head">
                  {jobsTitle.name}{" "}
                  <span className="change-brackets-color-jobs">
                    ({jobsTitle.job_count})
                  </span>
                </p>
              </div>
            ))}
            {/* Child Jobs 1 Ends */}
          </div>
        </div>
        {/* Jobs By Tittle Ends */}
      </div>

      {/* Jobs By Industry Starts */}
      <div className="jobs-by-designation-jobs">
        <h2 className="title-of-designation-color-jobs">Jobs by Skills</h2>
        <div className="jobs-title-row-parent-designation">
          {/* Child Jobs Industry 1 Starts */}
          {jobsBySkills.map((jobsSkill) => (
            <div
              className="jobs-title-row-1-designation-jobs"
              key={jobsSkill.id}
            >
              <p className="jobs-by-title-head">
                {jobsSkill.name}{" "}
                <span className="change-brackets-color-jobs">
                  ({jobsSkill.job_count})
                </span>
              </p>
            </div>
          ))}
          {/* Child Jobs Industry 1 Ends */}
        </div>
      </div>
      {/* Jobs By Industry Ends */}

      <Footer />
    </div>
  );
}

export default Jobs;

/* Child Jobs 1 Starts */

/* <div className="jobs-title-row-1-jobs">
<p className="jobs-by-title-head">
  Top Managment{" "}
  <span className="change-brackets-color-jobs">(90)</span>
</p>
<p className="jobs-by-title-head">
  Civil Engineering{" "}
  <span className="change-brackets-color-jobs">(200)</span>
</p>
<p className="jobs-by-title-head">
  Web Developer{" "}
  <span className="change-brackets-color-jobs">(400)</span>
</p>
<p className="jobs-by-title-head">
  HR Manager{" "}
  <span className="change-brackets-color-jobs">(100)</span>
</p>
</div> */

/* Child Jobs 1 Ends */

{
  /* Child Jobs Industry 1 Starts */
}
{
  /* <div className="jobs-title-row-1-industry-jobs">
<p className="jobs-by-title-head">
  Graphics Design{" "}
  <span className="change-brackets-color-jobs-industry">
    (4490)
  </span>
</p>
<p className="jobs-by-title-head">
  Video Editing{" "}
  <span className="change-brackets-color-jobs-industry">
    (2200)
  </span>
</p>
<p className="jobs-by-title-head">
  Auditing{" "}
  <span className="change-brackets-color-jobs-industry">(400)</span>
</p>
<p className="jobs-by-title-head">
  Finance{" "}
  <span className="change-brackets-color-jobs-industry">
    (1400)
  </span>
</p>
</div> */
}
{
  /* Child Jobs Industry 1 Ends */
}
