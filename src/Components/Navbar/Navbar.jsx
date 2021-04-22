import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../Assests/logo.png";
import RegisterBtn from "../../Assests/Register.svg";
import Premiumbtn from "../../Assests/premium-btn.svg";
import Google from "../../Assests/modalIcons/google-modal.svg";
import Facebook from "../../Assests/modalIcons/facebook-modal.svg";
import Linkedin from "../../Assests/modalIcons/linkedin-modal.svg";
import "../Login/Login.css";
import "../Register/Register.css";
import "../ForgetPassword/ForgetPassword.css";

Modal.setAppElement("#root");

const navBarObj = {
  nav1: "HOME",
  nav2: "JOBS",
  nav3: "LOGIN",
  nav4: "FOR RECRUITERS",
};

function Navbar() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [registerModalIsOpen, setRegisterModalIsOpen] = useState(false);
  const [forgetModalIsOpen, setForgetModalIsOpen] = useState(false);

  const LoginFunctionality = () => {
    setModalIsOpen(false);
  };

  const termsAndConditionFun = () => {
    setRegisterModalIsOpen(false);
  };

  const ForgetPassFunctionality = () => {
    setForgetModalIsOpen(true);
    // setModalIsOpen(false);
  };

  return (
    <div className="navbar-parent">
      <div className="nav-image">
        <Link to="/">
          <img src={Logo} />
        </Link>
      </div>
      <div className="nav-content">
        <Link to="home" className="default-style-nav">
          <p className="make-a-cursor-point">{navBarObj.nav1}</p>
        </Link>

        <Link to="jobs" className="default-style-nav">
          <p className="make-a-cursor-point">{navBarObj.nav2}</p>
        </Link>

        {/*------ Login Modal Starts ---------- */}
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
              backgroundColor: "rgba(0,0,0,0.7)",
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
              boxShadow: "0 0 2px 2px #f2f2f2",
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
                <small
                  className="forget-text-login"
                  onClick={ForgetPassFunctionality}
                >
                  Forget your Password?
                </small>
                {/*------ Forget Password Modal Starts --------- */}
                <Modal
                  isOpen={forgetModalIsOpen}
                  onRequestClose={() => setForgetModalIsOpen(false)}
                  style={{
                    overlay: {
                      position: "fixed",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: "rgba(0,0,0,0.7)",
                    },
                    content: {
                      position: "absolute",
                      margin: "0 auto",
                      height: "250px",
                      width: "350px",
                      top: "210px",
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
                      boxShadow: "0 0 2px 2px #f2f2f2",
                      borderRadius: "20px",
                      background: "#fff",
                      border: "1px solid #fff",
                    },
                  }}
                >
                  <section className="modal-forget-parent">
                    <div className="forget-pass-heading">
                      <h1 className="forget-pass-headingss">
                        Forget Your Password?
                      </h1>
                    </div>
                    <div className="forget-pass-desc">
                      <p className="forget-pass-text">
                        Enter your email address below and we will send you a
                        reset password link.
                      </p>
                    </div>
                    <div className="email-id-forget-pass">
                      <label className="enter-your-email-id">
                        Enter Registered Email ID
                      </label>
                      <input
                        type="email"
                        className="forget-email-input"
                        placeholder="Enter your Email ID"
                      />
                    </div>
                    <div className="rember-pass-login-instead">
                      <small className="rember-pass-login-instead-text">
                        Remember your Password? Login instead
                      </small>
                    </div>
                    <div className="forget-foot-btn">
                      <button className="send-footer-btn">Send</button>
                    </div>
                  </section>
                </Modal>
                {/* Forget Password Modal Ends */}
              </div>
            </div>

            <div className="modal-login-candidate">
              <Link to="dashboard">
                <button
                  className="modal-login-candidate-btn"
                  onClick={LoginFunctionality}
                >
                  LOGIN
                </button>
              </Link>
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
        <p className="make-a-cursor-point" onClick={() => setModalIsOpen(true)}>
          {navBarObj.nav3}
        </p>
        {/* Login Modal Ends */}

        <p className="make-a-cursor-point">
          <Link to="register">
            <button className="btn-nav">
              <img src={RegisterBtn} />
            </button>
          </Link>
        </p>
        <p className="make-a-cursor-point">
          <Link to="get-premium">
            <button className="btn-nav">
              <img src={Premiumbtn} alt="" />
            </button>
          </Link>
        </p>
        <p className="make-a-cursor-point">{navBarObj.nav4}</p>
      </div>
    </div>
  );
}

export default Navbar;
