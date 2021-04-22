import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Pages/Home/Home";
import Jobs from "../Pages/Jobs/Jobs";
import TopManagment from "../Pages/TopManagment/TopManagment";
import JobsDetail from "../Pages/JobsDetail/JobsDetail";
import CompanyProfile from "../Pages/CompanyProfile/CompanyProfile";
import SearchJobs from "../Pages/SearchJobs/SearchJobs";
import SearchResults from "../Pages/SearchResults/SearchResults";
import GetPremium from "../Pages/GetPremium/GetPremium";
import Dashboard from "../Pages/Dashboard/Dashboard";
import JobAlert from "../Pages/JobAlert/JobAlert";
import ProfileViewed from "../Pages/ProfileViewed/ProfileViewed";
import UploadCv from "../Pages/UploadCV/UploadCv";
import AppliedSuccess from "../Pages/AppliedSuccess/AppliedSuccess";
import TermsandCondition from "../Pages/TermsandConditions/TermsandCondition";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import RegisterUs from "../Pages/RegisterUs/RegisterUs";
import CvShortListed from "../Pages/CvShortListed/CvShortListed";


function Routing() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/jobs" exact component={Jobs} />
          <Route path="/top-managment" exact component={TopManagment} />
          <Route path="/job-details" exact component={JobsDetail} />
          <Route path="/company-profile" exact component={CompanyProfile} />
          <Route path="/search-jobs" exact component={SearchJobs} />
          <Route path="/search-results" exact component={SearchResults} />
          <Route path="/get-premium" exact component={GetPremium} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/create-job-alert" exact component={JobAlert} />
          <Route path="/profile-viewed" exact component={ProfileViewed} />
          <Route path="/upload-cv" exact component={UploadCv} />
          <Route path="/applied-success" exact component={AppliedSuccess} />
          <Route path="/terms-and-condition" exact component={TermsandCondition} />
          <Route path="/privacy-policy" exact component={PrivacyPolicy} />
          <Route path="/register" exact component={RegisterUs} />
          <Route path="/cv-shortlisted" exact component={CvShortListed} />
        </Switch>
      </Router>
    </div>
  );
}

export default Routing;
