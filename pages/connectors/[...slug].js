import React from "react";

import { useRouter } from "next/router";

import Head from "next/head";
import ConnectorHero from "../../components/ConnectorHero";
import PageCta from "../../components/PageCta";
import AppStream from "../../components/AppStream";
import Steps from "../../components/Steps"
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
  
  const slugs = slug[0].includes('-') ? slug[0].split('-') : slug

  const currentConnector = findConnector(slugs[0]) || DEFAULT_CONNECTORS[0];
  const nextConnector = findConnector(slugs[1]) || null
  const nextConnectorString = nextConnector && ` and ${nextConnector.name}`

  return (
    <>
      <Head>
        <title>{currentConnector.name}{nextConnector && nextConnectorString} Integrations + Automations</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ConnectorHero connector={currentConnector} nextConnector={nextConnector} />
      <Steps slug={slug} connector={currentConnector} nextConnector={nextConnector} />
      <AppStream connectors={DEFAULT_CONNECTORS} />
      <PageCta />
    </>
  );
}
