import React from "react";
import { Card } from "semantic-ui-react";
import Host from "./Host"

function HostList({hosts, selectHost, selectedHost}) {
  const displayHosts = hosts.map(host => 
    <Host 
      host={host} 
      selectHost={selectHost}
      selectedHost={selectedHost}
      key={host.id}/>)
  return (
    <Card.Group itemsPerRow={6}>{displayHosts}</Card.Group>
  );
}

export default HostList;
