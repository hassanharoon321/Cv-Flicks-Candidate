import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./ForgetPassword.css";

Modal.setAppElement("#root");

function ForgetPassword() {
  const [forgetModalIsOpen, setForgetModalIsOpen] = useState(false);

  return (
    <div>
      {/* <button onClick={() => setForgetModalIsOpen(true)}>
        Forget Password
      </button> */}

      {/* Forget Password Modal Starts */}
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
            backgroundColor: "transparent",
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
            boxShadow: "0 0 5px 5px #f2f2f2",
            borderRadius: "20px",
            background: "#fff",
            border: "1px solid #fff",
          },
        }}
      >
        <section className="modal-forget-parent">
          <div className="forget-pass-heading">
            <h1 className="forget-pass-headingss">Forget Your Password?</h1>
          </div>
          <div className="forget-pass-desc">
            <p className="forget-pass-text">
              Enter your email address below and we will send you a reset
              password link.
            </p>
          </div>
          <div className="email-id-forget-pass">
            <label className="enter-your-email-id">Enter Registered Email ID</label>
            <input type="email" className="forget-email-input" placeholder="Enter your Email ID"/>
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
  );
}

export default ForgetPassword;
