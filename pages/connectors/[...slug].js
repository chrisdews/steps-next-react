import React from "react";

import { useRouter } from "next/router";

import Head from "next/head";
import ConnectorHero from "../../components/ConnectorHero";
import PageCta from "../../components/PageCta";
import AppStream from "../../components/AppStream";
import data from "../api/data.json";

const DEFAULT_CONNECTORS = data.connectors;

const findConnector = (slug) => {
  const filteredConnectors = DEFAULT_CONNECTORS.filter((x) => x.slug === slug);
  return filteredConnectors[0];
};

export default function Connector() {
  const router = useRouter();
  const slug = router.query.slug || [];

  if (!slug[0]) {
    return <div>loading...</div>;
  }

  const currentConnector = findConnector(slug[0]) || DEFAULT_CONNECTORS[0];

  return (
    <>
      <Head>
        <title>{currentConnector.name} Integrations + Automations</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ConnectorHero connector={currentConnector} />

      <div
        style={{
          border: "2px dashed red",
          margin: "2em 0",
          padding: "2em",
          textAlign: "center",
        }}
      >
        <h3>Add your new component here!</h3>
      </div>

      <AppStream connectors={DEFAULT_CONNECTORS} />
      <PageCta />
    </>
  );
}
