import React from "react";
import { Card } from "semantic-ui-react";
import "../stylesheets/Host.css";

function Host({host, selectedHost, selectHost}) {
  const { imageUrl, id } = host
  /* NOTE: The className "host selected" renders a different style than simply "host". */
  return (
    <Card
      className={selectedHost ? 
        selectedHost.id === id ? "host selected" : "host" 
        : "host"}
      onClick={() => selectHost(host)}
      image={imageUrl}
      raised
      link
    />
  );
}

export default Host;
