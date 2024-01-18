import React from "react";
import { Segment, Image } from "semantic-ui-react";
import * as Images from "../services/Images";
import HostInfo from "./HostInfo"

function Details({host, areas, onActivate, onChangeArea, currentNumHosts}) {

  return (
    <Segment id="details" className="HQComps">
      {host ? 
      <HostInfo host={host}
      areas={areas}
      onActivate={onActivate}
      onChangeArea={onChangeArea}
      currentNumHosts={currentNumHosts}/>:
      <Image size="small" src={Images.westworldLogo} /> }
    </Segment>
  );
}

export default Details;
