import React from "react";
import { Segment, Image } from "semantic-ui-react";
import * as Images from "../services/Images";
import HostInfo from "./HostInfo"

function Details({host, updateSelectedHost, areas, onActivate, onChangeArea}) {

  return (
    <Segment id="details" className="HQComps">
      {host ? 
      <HostInfo host={host}
      updateSelectedHost={updateSelectedHost}
      areas={areas}
      onActivate={onActivate}
      onChangeArea={onChangeArea}/>:
      <Image size="small" src={Images.westworldLogo} /> }
    </Segment>
  );
}

export default Details;
