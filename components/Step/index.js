import React from "react";
import PropTypes from "prop-types";
import styles from "./Step.module.css";

export default function Step({ children, logo}) {
  return (
    <>
      <div className={styles.stepContainer}>
        {logo ? <img src={logo} className={styles.logoContainer} /> : <div className={styles.logoContainer}><h5>{children}</h5></div>}
        <h5 className={styles.logoName}>{children}</h5>
      </div>
    </>
  );
}

Step.propTypes = {
  children: PropTypes.any,
  logo: PropTypes.string
};
