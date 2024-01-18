import React, { useState } from "react";
import { Segment, Button } from "semantic-ui-react";
import { Log } from "../services/Log";

function LogPanel({ activateDecomAll, onNewLog, currentLogs }) {
  const [allActive, setAllActive] = useState(false);

  function toggleActivation() {
    allActive === true
      ? onNewLog(Log.notify("Decommissiong all hosts."))
      : onNewLog(Log.warn("Activating all hosts!"));
    activateDecomAll(!allActive);
    setAllActive(!allActive);
  }

  return (
    <Segment className="HQComps" id="logPanel">
      <pre>
        {currentLogs.map((log, i) => (
          <p key={i} className={log.type}>
            {log.msg}
          </p>
        ))}
      </pre>

      {allActive ? (
        <Button
          fluid
          color={"green"}
          content={"DECOMMISSION ALL"}
          onClick={toggleActivation}
        />
      ) : (
        <Button
          fluid
          color={"red"}
          content={"ACTIVATE ALL"}
          onClick={toggleActivation}
        />
      )}
    </Segment>
  );
}

export default LogPanel;
