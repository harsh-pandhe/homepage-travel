import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with MapFleet</span>
          <span className="secondaryText">
            fill out our contact form and
            <br />
            we'll get back to you ASAP!
          </span>
          <button className="button" href>
            <a href="mailto:harshpandhehome@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
