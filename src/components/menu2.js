import React from "react";
import styles from "./menu2.module.css";

import magnet from "../assets/magnet.png";
import card from "../assets/card.png";
import arrow from "../assets/arrow.png";
import scanner from "../assets/scanner.png";

const Menu2 = () => {
  return (
    <div className={styles.container}>
      <main className={styles.wrapper}>
        <h1 className={styles.title}>
          Use Trialog to drive growth at every stage of the customer lifecycle
        </h1>
        <section className={styles.features}>
          <article className={styles.feature}>
            <div className={styles.feature_heading}>
              <img
                className={styles.feature_icon}
                src={magnet}
                alt="Magnet Icon"
              ></img>
              <p className={styles.feature_title}>LEAD GENERATION</p>
            </div>
            <h2 className={styles.feature_heading2}>
              Move deals through your funnel – fast
            </h2>
            <p className={styles.feature_paragraph}>
              Our chatbots and live chat capture more of your best leads and
              convert them while they’re hot.
            </p>
            <div className={styles.learn_more}>
              <span>Learn more</span>
              <img src={arrow} alt="Arrow Icon"></img>
            </div>
          </article>
          <article className={styles.feature}>
            <div className={styles.feature_heading}>
              <img
                className={styles.feature_icon}
                src={card}
                alt="Card Icon"
              ></img>
              <p className={styles.feature_title}>CUSTOMER ENGAGEMENT</p>
            </div>
            <h2 className={styles.feature_heading2}>
              Precision-targeted engagement at scale
            </h2>
            <p className={styles.feature_paragraph}>
              Set your customers up for success with tailored onboarding and
              activation messages.
            </p>
            <div className={styles.learn_more}>
              <span>Learn more</span>
              <img src={arrow} alt="Arrow Icon"></img>
            </div>
          </article>
          <article className={styles.feature}>
            <div className={styles.feature_heading}>
              <img
                className={styles.feature_icon}
                src={scanner}
                alt="Scanner Icon"
              ></img>
              <p className={styles.feature_title}>OMNICHANNEL ANALYTICS</p>
            </div>
            <h2 className={styles.feature_heading2}>
              Omnichannel analytics made easy
            </h2>
            <p className={styles.feature_paragraph}>
              Trialog Explore provides analytics for businesses to measure and
              improve the entire customer experience.
            </p>
            <div className={styles.learn_more}>
              <span>Learn more</span>
              <img src={arrow} alt="Arrow Icon"></img>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Menu2;
