import React from "react";
import styles from "./menu3.module.css";

import scissors from "../assets/scissors.png";
import green_arrow from "../assets/green_arrow.png";
import arrow from "../assets/arrow.png";
import page3_image from "../assets/page3_image.png";

const Menu3 = () => {
  return (
    <div className={styles.container}>
      <main className={styles.wrapper}>
        <img className={styles.scissors_icon} src={scissors}></img>
        <button className={styles.engagement_buttom}>Engagement</button>
        <h3 className={styles.heading3}>
          Engagement surveys combined with performance data
        </h3>
        <div className={styles.learn_more}>
          <span>Learn more</span>
          <img src={green_arrow}></img>
        </div>
        <figure className={styles.image_container}>
          <img src={page3_image}></img>
        </figure>
        <div className={styles.features_wrapper}>
          <article className={styles.feature}>
            <h2 className={styles.feature_heading2}>
              Move deals through your funnel – fast
            </h2>
            <p className={styles.feature_paragraph}>
              Our chatbots and live chat capture more of your best leads and
              convert them while they’re hot.
            </p>
            <div className={styles.learn_more_feature}>
              <span>Learn more</span>
              <img src={arrow} alt="Arrow Icon"></img>
            </div>
          </article>
          <article className={styles.feature}>
            <h2 className={styles.feature_heading2}>
              Move deals through your funnel – fast
            </h2>
            <p className={styles.feature_paragraph}>
              Our chatbots and live chat capture more of your best leads and
              convert them while they’re hot.
            </p>
            <div className={styles.learn_more_feature}>
              <span>Learn more</span>
              <img src={arrow} alt="Arrow Icon"></img>
            </div>
          </article>
          <article className={styles.feature}>
            <h2 className={styles.feature_heading2}>
              Move deals through your funnel – fast
            </h2>
            <p className={styles.feature_paragraph}>
              Our chatbots and live chat capture more of your best leads and
              convert them while they’re hot.
            </p>
            <div className={styles.learn_more_feature}>
              <span>Learn more</span>
              <img src={arrow} alt="Arrow Icon"></img>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
};
export default Menu3;
