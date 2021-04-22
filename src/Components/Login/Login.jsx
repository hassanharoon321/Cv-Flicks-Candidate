import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Google from "../../Assests/google.svg";
import Facebook from "../../Assests/facebook.svg";
import Linkedin from "../../Assests/linkedin.svg";
import "./Login.css";

Modal.setAppElement("#root");

function Login() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      {/* <button onClick={() => setModalIsOpen(true)}>
        Login
      </button> */}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
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
            height: "400px",
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
        <div className="modal-login-parent">
          <div className="modal-login-child-1">
            <h1 className="login-modal-heading-color">Login</h1>
          </div>
          <div className="login-inputs-child-2">
            <label className="login-modal-label">Username or Email</label>
            <input
              type="email"
              placeholder="Type your username or email"
              className="username-input-login-modal"
            />
            <label className="login-modal-label-2">Password</label>
            <input
              type="text"
              placeholder="Type your password"
              className="username-input-login-modal"
            />
            <div className="forget-your-password">
              <small className="forget-text-login">Forget your Password?</small>
            </div>
          </div>
          <div className="modal-login-candidate">
            <button className="modal-login-candidate-btn">Log In</button>
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
              Don't have an account?
              <span className="regis-here-modal-login"> Register here</span>
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Login;
