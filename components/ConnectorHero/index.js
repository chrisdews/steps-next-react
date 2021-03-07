import React from "react";

import style from "./ConnectorHero.module.css";

const ConnectorHero = ({ connector, nextConnector }) => {
  const connectorNameString = nextConnector
    ? `${connector.name} and ${nextConnector.name}`
    : connector.name;
  const connectorDescriptionString = nextConnector
    ? `connectors, which can connect to any service without the need for separate integration tools.`
    : `connector, which connects any services without the need for separate integration tools.`;

  return (
    <div className={style.ConnectorHero}>
      <div className={style.container}>
        <a href="/" className={style.logoContainer}>
          <img src="/logo.svg" className={style.logo} />
        </a>
        <div className={style.content}>
          <div>
            <h1 className={style.title}>
              {connectorNameString} integration + automation
            </h1>
            <p className={style.subtitle}>
              {connectorNameString} integrations couldn’t be easier with the
              Tray Platform’s robust {connectorNameString}{" "}
              {connectorDescriptionString}
            </p>
            <button>Try our {connector.name} connector</button>
            {nextConnector && (
              <button>Try our {nextConnector.name} connector</button>
            )}
          </div>
          <div className={style.connectorIconContainer}>
            <img src={connector.logo} className={style.connectorIcon} />
            {nextConnector && (
              <img src={nextConnector.logo} className={style.connectorIcon} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectorHero;
