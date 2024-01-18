import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import ColdStorage from "./ColdStorage";
import LogPanel from "./LogPanel";
import "../stylesheets/Headquarters.css";

function Headquarters({
  hosts,
  areas,
  onActivate,
  onChangeArea,
  selectedHost,
  onSelectHost,
  currentNumHosts,
  activateDecomAll,
}) {
  const [logs, setLogs] = useState([]);

  function updateLogs(newLog) {
    setLogs([newLog, ...logs]);
  }

  return (
    <Grid celled="internally">
      <Grid.Column width={8}>
        <ColdStorage
          hosts={hosts}
          selectedHost={selectedHost}
          onSelectHost={onSelectHost}
        />
      </Grid.Column>
      <Grid.Column width={5}>
        <Details
          host={selectedHost}
          onSelectHost={onSelectHost}
          areas={areas}
          onActivate={onActivate}
          onChangeArea={onChangeArea}
          currentNumHosts={currentNumHosts}
          onNewLog={updateLogs}
        />
      </Grid.Column>
      <Grid.Column width={3}>
        <LogPanel
          activateDecomAll={activateDecomAll}
          currentLogs={logs}
          onNewLog={updateLogs}
        />
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
