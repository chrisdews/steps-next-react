import React from "react";
import Step from "../Step";
import StepLink from "../StepLink";
import PropTypes from "prop-types";
import styles from "./Steps.module.css";

export default function Steps({ connector: { logo, name }, nextConnector }) {
  const nextConnectorLogo = nextConnector && nextConnector.logo;
  const nextConnectorName = nextConnector ? nextConnector.name : "Any API or Service";

  return (
    <div className={styles.stepsContainer}>
      <Step logo="/manualTriggerIcon.svg" className="position1">
        Manual Trigger
      </Step>
      <StepLink position="position2" />
      <Step logo={logo} className="position3">
        {name}
      </Step>
      <StepLink position="position4" />
      <Step logo={nextConnectorLogo} className="position5">
        {nextConnectorName}
      </Step>
    </div>
  );
}

Steps.propTypes = {
  logo: PropTypes.string,
  name: PropTypes.string,
  connector: PropTypes.object,
  nextConnector: PropTypes.object,
};
