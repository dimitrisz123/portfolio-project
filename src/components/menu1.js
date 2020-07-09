import React from "react";
import "./menu1.css";

import illustration1 from "../assets/illustration1.png";
import play from "../assets/play.png";

const Menu1 = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="menu1-title center">We’re all about the customer</h1>
        <div className="menu1-subtitles center">
          <span className="menu1-subtitle">Support</span>
          <span className="menu1-subtitle no-border">Sales</span>
        </div>

        <div style={{ display: "flex" }}>
          <div className="left">
            <button className="menu-button">Support</button>
            <h2 className="header2">Keep customers happy</h2>
            <p className="h2-text">
              Your customers want to talk to you—make it easy for them. Our
              support products allow customer conversations to flow seamlessly
              across all channels, which means more productive agents and more
              satisfied customers.
            </p>
            <div className="h2-links-wrapper">
              <p className="h2-links h2-link-padding-right">Learn more</p>
              <img
                className="play-icon"
                src={play}
                width="15.83px"
                height="15.83px"
                alt="Play circle"
              ></img>
              <p className="h2-links">Watch</p>
            </div>
            <h4 className="header4">Internal Help Desk</h4>
            <p className="header4-text">
              Employees are customers, too—with our internal helpdesk, you can
              create consumer-like experiences for your employees that are easy,
              reliable, and more productive.
            </p>
            <p className="h4-link">Learn more</p>
          </div>
          <figure className="illustration2_container">
            <img
              className="illustration2"
              src={illustration1}
              alt="Second illustration"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Menu1;
