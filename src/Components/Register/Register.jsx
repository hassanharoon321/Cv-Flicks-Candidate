import React, { useState, useEffect } from "react";
import "./Register.css";
import Google from "../../Assests/google.svg";
import Facebook from "../../Assests/facebook.svg";
import Linkedin from "../../Assests/linkedin.svg";
import Modal from "react-modal";

Modal.setAppElement("#root");

function Register() {
  const [registerModalIsOpen, setRegisterModalIsOpen] = useState(false);
  return (
    <div>
      {/* <button onClick={() => setRegisterModalIsOpen(true)}>Register</button> */}

      {/* Register Modal Starts */}
      <Modal
        isOpen={registerModalIsOpen}
        onRequestClose={() => setRegisterModalIsOpen(false)}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "transparent",
          },
          content: {
            position: "absolute",
            margin: "0 auto",
            height: "450px",
            width: "300px",
            top: "120px",
            left: "0",
            right: "0",
            bottom: "0",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px",
            boxShadow: "0 0 5px 5px #f2f2f2",
            borderRadius: "20px",
            background: "#fff",
            border: "1px solid #fff",
          },
        }}
      >
        <div className="modal-register-parent">
          <div className="modal-register-child-1">
            <h1 className="register-modal-heading-color">Register</h1>
          </div>
          <div className="register-inputs-child-2">
            <label className="register-modal-label">Email</label>
            <input
              type="email"
              placeholder="Type your username or email"
              className="username-input-register-modal"
            />
            <label className="register-modal-label-2">Password</label>
            <input
              type="text"
              placeholder="Type your password"
              className="username-input-register-modal"
            />
            <label className="register-modal-label-2">Confirm Password</label>
            <input
              type="text"
              placeholder="Type your password again"
              className="username-input-register-modal"
            />
          </div>
          <div className="register-terms-and-cond-div">
            <small className="register-text-terms">
              By clicking "Register" you agree to our
              <span className="register-to-purple">
                {" "}
                Terms and Condition
              </span>{" "}
              as well as our
              <span className="register-to-purple"> Privacy Policy</span>
            </small>
          </div>

          <div className="modal-register-candidate">
            <button className="modal-regsiter-candidate-btn">Register</button>
          </div>
          <div className="footer-modal-login">
            <small className="top-or">__________________________</small>
          </div>
          <div className="icons-of-modal-login">
            <button className="google-icon-login-modal">
              <img src={Google} />
            </button>
            <button className="facebook-icon-login-modal">
              <img src={Facebook} />
            </button>
            <button className="linkedin-icon-login-modal">
              <img src={Linkedin} />
            </button>
          </div>
          <div className="footer-modal-login-last">
            <p className="dont-have-an-account">
              Already have an account?
              <span className="regis-here-modal-login"> Login here</span>
            </p>
          </div>
        </div>
      </Modal>
      {/* Register Modal Ends */}
    </div>
  );
}

export default Register;
