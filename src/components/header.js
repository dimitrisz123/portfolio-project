import React from "react";
import "./header.css";

import logo from "../assets/logo.png";
import illustration from "../assets/illustration.png";
import arrow from "../assets/arrow.png";
import dropdown from "../assets/dropdown.png";
import check from "../assets/check.png";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="list-container">
          <li>
            <a className="nav-link1" href="#">
              <img src={logo} width={"109px"} height={"44px"} alt="logo" />
            </a>
          </li>
          <li>
            <a
              className="nav-links"
              style={{ display: "flex", alignItems: "center" }}
              href="#"
            >
              <span>Features</span>
              <img className="dropdown-icon" src={dropdown}></img>
            </a>
          </li>
          <li>
            <a className="nav-links" href="#">
              <span>Pricing</span>
            </a>
          </li>
          <li>
            <a className="nav-links" href="#">
              <span>Customers</span>
            </a>
          </li>
          <li>
            <a className="nav-links" href="#">
              <span>Desktop app</span>
            </a>
          </li>
          <li>
            <a className="sign-in" href="#">
              <span>Sign in</span>
            </a>
          </li>
          <li>
            <a className="nav-links" href="#">
              <button type="button">
                Get started
                <img src={arrow}></img>
              </button>
            </a>
          </li>
        </ul>
      </nav>
      <main className="header-content">
        <section className="content-left">
          <p className="header-title">
            Better customer relationships start here
          </p>
          <p className="header-paragraph">
            Drive loyalty and growth at every stage of your customer lifecycle
            with Trialog — the best in real-time business messaging.
          </p>
          <div className="email">
            <input
              placeholder="Your email address"
              className="email-input"
            ></input>
            <button className="email-button">Get started</button>
          </div>
          <div className="check-items">
            <img className="check-icon" src={check} alt="check-icon" />
            <p className="check-items-text">Messenger</p>
            <img className="check-icon" src={check} alt="check-icon" />
            <p className="check-items-text">Product Tours</p>
            <img className="check-icon" src={check} alt="check-icon" />
            <p className="check-items-text">Inbox</p>
          </div>
        </section>
        <figure className="image-container">
          <img className="illustration" src={illustration} alt="illustration" />
        </figure>
      </main>
    </header>
  );
};

export default Header;
