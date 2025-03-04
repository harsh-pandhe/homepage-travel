import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        <div className="flexColStart f-left">
          <img src="./logo_black.png" alt="" width={120} />
          <span className="secondaryText">
            Streamlining Logistics,
            <br />
            Simplifying Success
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">📍Location: 45, Shivaji Nagar, Near Park Chowk, <br />
            Solapur, Maharashtra - 413001, India 🚚</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
