import React from "react";
import { Link } from "react-router-dom";
import "./UploadCv.css";
import UploadCloud from "../../Assests/upload-cloud.svg";

function UploadCv() {
  return (
    <div className="upload-cv-main">
      <div className="upload-main-div">
        <h2 className="upload-your-cv-head">Upload your Video CV</h2>
        <p className="upload-your-cv-para">
          Send your video CV to the employer
        </p>
        <div className="browse-file-upload-div">
          <button className="browse-file-upload-btn">
            <img src={UploadCloud} className="cloud-upload-img" /> Browse file
            to upload
          </button>
        </div>
        <small className="sup-file-txt">
          Supported file format png, jpg, jpeg, gif | upto 3 Mb
        </small>
        <h2 className="some-space-upload">OR</h2>
        <h2 className="some-space-upload">Choose From Your Uploads</h2>
        <div className="video-sec-main-div">
          <video width="160" height="130" controls>
            <source src="movie.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video width="160" height="130" controls>
            <source src="/" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <Link to="applied-success">
          <button className="upload-btn-cv">Upload</button>
        </Link>
      </div>
    </div>
  );
}

export default UploadCv;
