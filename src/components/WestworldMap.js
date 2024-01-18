import React from "react";
import { Segment } from "semantic-ui-react";
import Area from "./Area"

function WestworldMap({areas, hosts, onActivate, onChangeArea, selectedHost, selectHost}) {
  
  const displayAreas = areas.map((area, index) => 
    <Area 
      area={area} 
      hosts={hosts} 
      onActivate={onActivate}
      onChangeArea={onChangeArea}
      selectedHost={selectedHost}
      selectHost={selectHost}
      key={area.id}
      />)

  return <Segment id="map">{displayAreas}</Segment>;
}

export default WestworldMap;


