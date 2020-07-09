import React from "react";
import styles from "./menu5.module.css";

import right_brands from "../assets/right_brands.png";
import left_brands from "../assets/left_brands.png";
import first_icon from "../assets/first_icon.png";
import second_icon from "../assets/second_icon.png";
import green_arrow from "../assets/green_arrow.png";
import customer_experience from "../assets/customer_experience.png";
import interviews from "../assets/interviews.png";
import advice from "../assets/advice.png";
import third_icon from "../assets/third_icon.png";
import bitmap1 from "../assets/bitmap1.png";
import bitmap2 from "../assets/bitmap2.png";
import bitmap3 from "../assets/bitmap3.png";
import bitmap4 from "../assets/bitmap4.png";

const Menu5 = () => {
  return (
    <div className={styles.background}>
      <img className={styles.left_brands} src={left_brands}></img>
      <img className={styles.right_brands} src={right_brands}></img>
      <section className={styles.integrations}>
        <img src={first_icon}></img>
        <h1>Seamless integrations with your favorite software</h1>
        <p>
          Getting started is easy and workflows are integrated with where your
          employees are already working.
        </p>
        <div className={styles.learn_more_integrations}>
          <span>Explore integrations</span>
          <img src={green_arrow}></img>
        </div>
      </section>
      <section className={styles.best_practices}>
        <img src={second_icon}></img>
        <p>Learn best practices from people operations experts</p>
        <div className={styles.about_us_container}>
          <section className={styles.about_us}>
            <img src={customer_experience}></img>
            <h1>
              Customer experience <span>team</span>
            </h1>
            <p>
              The Trialog team has helped hundreds of companies implement a
              continuous performance management process.
            </p>
            <div className={styles.learn_more_about_us}>
              <span>Talk to product specialist</span>
              <img src={green_arrow}></img>
            </div>
          </section>
          <section className={styles.about_us}>
            <img src={interviews}></img>
            <h1>Interviews with People Operations experts</h1>
            <p>
              Video and podcast series featuring today’s leading people
              operations experts, including: Jennifer Aniston.
            </p>
            <div className={styles.learn_more_about_us}>
              <span>Watch the interviews</span>
              <img src={green_arrow}></img>
            </div>
          </section>
          <section className={styles.about_us}>
            <img src={advice}></img>
            <h1>Peer advice from the People Ops Community</h1>
            <p>
              A Slack community of forward-thinking People Operations leaders.
            </p>
            <div className={styles.learn_more_about_us}>
              <span>Join the community</span>
              <img src={green_arrow}></img>
            </div>
          </section>
        </div>
      </section>
      <section className={styles.people_management}>
        <img src={third_icon}></img>
        <h1>People Management Library</h1>
        <p>
          The ultimate guide to people management — actionable advice for HR
          teams, managers, and executives.
        </p>
        <div className={styles.management_details}>
          <section className={styles.section_wrapper}>
            <figure className={styles.gradient1}>
              <img src={bitmap1}></img>
            </figure>
            <h1 className={styles.width1}>Performance Management</h1>
            <div className={styles.learn_more_wrapper}>
              <span>Learn more</span>
              <img src={green_arrow}></img>
            </div>
          </section>
          <section className={styles.section_wrapper}>
            <figure className={styles.gradient2}>
              <img src={bitmap2}></img>
            </figure>
            <h1 className={styles.width2}>Managing & collecting people</h1>
            <div className={styles.learn_more_wrapper}>
              <span>Learn more</span>
              <img src={green_arrow}></img>
            </div>
          </section>
          <section className={styles.section_wrapper}>
            <figure className={styles.gradient3}>
              <img src={bitmap3}></img>
            </figure>
            <h1 className={styles.width1}>Performance Reviews</h1>
            <div className={styles.learn_more_wrapper}>
              <span>Learn more</span>
              <img src={green_arrow}></img>
            </div>
          </section>
          <section className={styles.section_wrapper}>
            <figure className={styles.gradient4}>
              <img src={bitmap4}></img>
            </figure>
            <h1 className={styles.width2}>Employee Feedback Poll Surveys</h1>
            <div className={styles.learn_more_wrapper}>
              <span>Learn more</span>
              <img src={green_arrow}></img>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};
export default Menu5;
