import React from "react";
import styles from "./menu4.module.css";

import freshly from "../assets/freshly.png";
import aspireiq from "../assets/aspireiq.png";
import clio from "../assets/clio.png";
import quotes from "../assets/quotes.png";
import badges from "../assets/badges.png";

const Menu4 = () => {
  return (
    <div className={styles.container}>
      <main className={styles.wrapper}>
        <h3 className={styles.main_title}>Loved by Employees</h3>
        <div className={styles.clients}>
          <figure>
            <img src={freshly}></img>
          </figure>
          <figure>
            <img src={aspireiq}></img>
          </figure>
          <figure>
            <img src={clio}></img>
          </figure>
        </div>
        <div className={styles.testimonials}>
          <article>
            <img src={quotes}></img>

            <p className={styles.quote}>
              I love how Trialog allowed me the ability to review my 5 direct
              reports in a quick yet meaningful manner - without Trialog, we
              were all over the place and we all dreaded the review process.
            </p>
          </article>
          <p className={styles.user}>
            Ben S.<span> — Senior Manager of Customer Service Excellence</span>
          </p>
        </div>
        <div className={styles.awards}>
          <img src={badges}></img>
          <div>
            <p>#1 Rated Performance Management platform on G2 Crowd</p>
            <p>By employees</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Menu4;
