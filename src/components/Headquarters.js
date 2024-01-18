import React from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import ColdStorage from "./ColdStorage";
import LogPanel from "./LogPanel"
import "../stylesheets/Headquarters.css";

function Headquarters({hosts, areas, onActivate, onChangeArea, selectedHost, selectHost}) {
  return (
    <Grid celled="internally">
      <Grid.Column width={8}>
        <ColdStorage 
          hosts={hosts}
          selectedHost={selectedHost} 
          selectHost={selectHost}/></Grid.Column>
      <Grid.Column width={5}>
        <Details 
          host={selectedHost}
          selectHost={selectHost}
          areas={areas}
          onActivate={onActivate}
          onChangeArea={onChangeArea}
          updateSelectedHost={selectHost}/>
      </Grid.Column>
      <Grid.Column width={3}>
        <LogPanel />
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
