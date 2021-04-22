import React from "react";
import Google from "../../Assests/modalIcons/google-modal.svg";
import Facebook from "../../Assests/modalIcons/facebook-modal.svg";
import LinkedIn from "../../Assests/modalIcons/linkedin-modal.svg";
import "./RegisterUs.css";

function RegisterUs() {
  return (
    <div className="register-parent">
      <h1 className="reg-head">Register</h1>
      {/* Inputs Starts here */}
      <div className="register-form-main">
        <div className="left-regiter">
          <div className="single-input-all">
            <label className="reg-label-one">First Name</label>
            <input
              type="text"
              placeholder="Type your first name here"
              className="reg-input"
            />
          </div>
          <div className="single-input-all">
            <label className="reg-label">Last Name</label>
            <input
              type="text"
              placeholder="Type your last name here"
              className="reg-input"
            />
          </div>
          <div className="single-input-all">
            <label className="reg-label">Phone Number</label>
            <input
              type="number"
              placeholder="Type your phone number"
              className="reg-input"
            />
          </div>
        </div>
        <div className="right-regiter">
          <div className="single-input-all">
            <label className="reg-label-one">Email</label>
            <input
              type="text"
              placeholder="Type your email here"
              className="reg-input"
            />
          </div>
          <div className="single-input-all">
            <label className="reg-label">Password</label>
            <input
              type="text"
              placeholder="Type your password here"
              className="reg-input"
            />
          </div>
          <div className="single-input-all">
            <label className="reg-label">Confirm Password</label>
            <input
              type="number"
              placeholder="Type your password again"
              className="reg-input"
            />
          </div>
        </div>
      </div>
      {/* Inputs Ends here */}
      <p className="para-register">
        By clicking "Register" you agree to our{" "}
        <span className="term-color-reg">Terms & Conditions</span>
        <br />
        as well as our <span className="term-color-reg">Privacy Policy</span>
      </p>
      <button className="register-btn-main">Register</button>
      <hr className="horizontal-ruler-reg"/>
      <div className="social-media-register">
        <button className="default-btn-design-reg">
          <img src={Google} alt=""/>
        </button>
        <button className="default-btn-design-reg">
          <img src={Facebook} alt=""/>
        </button>
        <button className="default-btn-design-reg">
          <img src={LinkedIn} alt=""/>
        </button>
      </div>
      <p className="login-here-modal-reg">
        Already have account? <span className="login-here-reg">Login here</span>
      </p>
    </div>
  );
}

export default RegisterUs;
