import React from "react";
import styles from "./subfooter.module.css";

const Subfooter = ({ data }) => {
  return data.map((d, i) => {
    return (
      <div key={i} className={styles.subfooter_details}>
        <h1>{d.title}</h1>
        <p>{d.heading1}</p>
        <p>
          {d.heading2}
          <span>{d.heading2span}</span>
        </p>
        <p>{d.heading3}</p>
        <p>{d.heading4}</p>
        <p>{d.heading5}</p>
        <p>{d.heading6}</p>
      </div>
    );
  });
};
export default Subfooter;
