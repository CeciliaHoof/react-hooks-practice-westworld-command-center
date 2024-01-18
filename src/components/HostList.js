import React from "react";
import { Card } from "semantic-ui-react";
import Host from "./Host"

function HostList({hosts, selectHost, selectedHost, onSelectHost}) {
  const displayHosts = hosts.map(host => 
    <Host 
      host={host} 
      onSelectHost={onSelectHost}
      selectedHost={selectedHost}
      key={host.id}/>)
  return (
    <Card.Group itemsPerRow={6}>{displayHosts}</Card.Group>
  );
}

export default HostList;
