import React from "react";
import styles from "./footer.module.css";
import Subfooter from "./subfooter";
import data from "../data.js";
import white_arrow from "../assets/white_arrow.png";
import twitter from "../assets/twitter.png";
import fb from "../assets/facebook.png";
import youtube from "../assets/youtube.png";

const Footer = () => {
  return (
    <div className={styles.background}>
      <h1>Want to explore more?</h1>;
      <p>
        Sign up for a Trialog account or ask to see our platform in action and
        discover the functionalities.
      </p>
      <button>
        <span className={styles.button_text}>Get started</span>
        <img src={white_arrow}></img>
      </button>
      <div className={styles.subfooter}>
        <Subfooter data={data[0].subfooter} />
        <Subfooter data={data[1].subfooter} />
        <Subfooter data={data[1].subfooter} />
        <Subfooter data={data[1].subfooter} />
        <Subfooter data={data[1].subfooter} />
        <Subfooter data={data[1].subfooter} />
      </div>
      <div className={styles.copyright}>
        <p>© Copyright Trialog BVBA/SpRl 2020. All Rights Reserved.</p>
        <img src={twitter}></img>
        <img src={fb}></img>
        <img src={youtube}></img>
      </div>
    </div>
  );
};
export default Footer;
