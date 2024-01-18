import React from "react";
import { Card } from "semantic-ui-react";
import "../stylesheets/Host.css";

function Host({host, selectedHost, onSelectHost}) {
  const { imageUrl, id } = host

  function selectHost(){
    onSelectHost(host)
  }

  return (
    <Card
      className={selectedHost ? 
        selectedHost.id === id ? "host selected" : "host" 
        : "host"}
      onClick={selectHost}
      image={imageUrl}
      raised
      link
    />
  );
}

export default Host;
