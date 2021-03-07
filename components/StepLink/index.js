import React from 'react';
import PropTypes from 'prop-types';
import styles from "./StepLink.module.css";

export default function StepLink ({position}) {
    return (
        <div className={`${styles.stepLink} ${styles[position]}` }/>
    );
};

StepLink.propTypes = {
    position: PropTypes.string,
};
