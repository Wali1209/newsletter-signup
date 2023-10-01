import React, { useEffect, useState } from "react";
import successIcon from "../assets/images/icon-success.svg";
import NewsLetterImg from "../assets/images/illustration-sign-up-desktop.svg";
import NewsLetterImgMobile from "../assets/images/illustration-sign-up-mobile.svg";
const NewsLetter = ({ handleSubmitForm }) => {
  const formInitialDetails = { email: "" };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [formError, setFormError] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };
  const isValidEmail = (email) => {
    // Email validation logic
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail(formDetails.email)) {
      setFormError(true);
      return; // Set error state to true
    } else {
      setFormError(false);
      // Reset error state to false if email is valid
    }
    handleSubmitForm(formDetails.email);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    //cleanUp function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container news-letter">
      <div className="row">
        <div className="col-12 col-md-6" style={{ padding: 0 }}>
          {windowWidth < 768 && (
            <div>
              <img src={NewsLetterImgMobile} alt="newsletter cover-mobile" />
            </div>
          )}

          <div className="news-letter-content">
            <h1 className="news-letter-heading">Stay updated!</h1>
            <p className="news-letter-text">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <ul className="news-letter-list">
              <li>
                <img src={successIcon} alt="" />
                <span>Product discovery and building what matters</span>
              </li>
              <li>
                <img src={successIcon} alt="" />
                <span>Measuring to ensure updates are a success</span>
              </li>
              <li>
                <img src={successIcon} alt="" />
                <span>And much more!</span>
              </li>
            </ul>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="row">
                <div className="col-6">
                  <label htmlFor="email">Email address</label>
                </div>
                {formError && (
                  <span className="col-6">Valid Email Required</span>
                )}
              </div>
              <div className="col-12">
                <input
                  type="text"
                  id="email"
                  placeholder="email@company.com"
                  onChange={(e) => onFormUpdate("email", e.target.value)}
                />
              </div>
              <button type="submit" className="col-12 danger">
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
        </div>

        {windowWidth >= 768 && (
          <div className="col-12 col-md-6">
            <img src={NewsLetterImg} alt="newsletter cover" />
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsLetter;
