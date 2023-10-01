import React from "react";
import successIcon from "../assets/images/icon-success.svg";
const Success = ({ userEmail, handleDismiss }) => {
  return (
    <div className="container success">
      <div className="row">
        <div className="col-12">
          <img src={successIcon} alt="" className="succes-img" />
          <h1 className="thank-you-heading">Thanks for subscribing!</h1>
          <p className="success-text">
            A confirmation email has been sent to <b>{userEmail}.</b> Please
            open it and click the button inside to confirm your subscription.
          </p>
          <button className="success-button" onClick={handleDismiss}>
            Dismiss message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
