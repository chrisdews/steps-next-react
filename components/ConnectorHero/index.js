import React from "react";

import style from "./ConnectorHero.module.css";

const ConnectorHero = ({ connector }) => {
  return (
    <div className={style.ConnectorHero}>
      <div className={style.container}>
        <a href="/" className={style.logoContainer}>
          <img src="/logo.svg" className={style.logo} />
        </a>
        <div className={style.content}>
          <div>
            <h1 className={style.title}>
              {connector.name} integration + automation
            </h1>
            <p className={style.subtitle}>
              {connector.name} integrations couldn’t be easier with the Tray
              Platform’s robust {connector.name} connector, which connects any
              services without the need for separate integration tools.
            </p>
            <button>Try our {connector.name} connector</button>
          </div>
          <div className={style.connectorIconContainer}>
            <img src={connector.logo} className={style.connectorIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectorHero;
