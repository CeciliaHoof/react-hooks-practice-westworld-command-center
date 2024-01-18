import React, { useEffect, useState } from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import WestworldMap from "./WestworldMap";
import HeadQuarters from "./Headquarters";

// const initialState = {
//   "high_plains": 0,
//   "lowlands": 0,
//   "under_construction": 0,
//   "pariah": 0,
//   "python_pass": 0,
//   "badlands": 0
// }

function App() {
  const [allHosts, setAllHosts] = useState([]);
  const [areas, setAreas] = useState([]);
  const [selectedHost, setSelectedHost] = useState("");
  //const [currentNumHosts, setCurrentNumHosts]=useState(initialState)

  const activeHosts = allHosts.filter((host) => host.active === true);
  const decomHosts = allHosts.filter((host) => host.active === false);

  const currentNumHosts = {
    high_plains: 0,
    lowlands: 0,
    under_construction: 0,
    pariah: 0,
    python_pass: 0,
    badlands: 0,
  };

  allHosts.map((host) => {
    currentNumHosts[host.area]++;
    return host;
  });

  useEffect(() => {
    fetch("http://localhost:3001/hosts")
      .then((resp) => resp.json())
      .then((data) => setAllHosts(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/areas")
      .then((resp) => resp.json())
      .then((data) => setAreas(data));
  }, []);

  function activateHost(host) {
    setSelectedHost({ ...host, active: !host.active });
    const { id, active } = host;
    const updatedHosts = allHosts.map((host) =>
      host.id === id ? { ...host, active: !active } : host
    );
    setAllHosts(updatedHosts);
  }

  function changeArea(host, value) {
    setSelectedHost({ ...host, area: value });
    const { id } = host;
    const updatedHosts = allHosts.map((host) =>
      host.id === id ? { ...host, area: value } : host
    );
    setAllHosts(updatedHosts);
  }

  function selectHost(host) {
    setSelectedHost(host);
  }

  function handleAllHostsActivation(boolean) {
    const updatedHosts = allHosts.map((host) => ({ ...host, active: boolean }));
    setAllHosts(updatedHosts);
  }

  return (
    <Segment id="app">
      <WestworldMap
        areas={areas}
        hosts={activeHosts}
        onActivate={activateHost}
        onChangeArea={changeArea}
        selectedHost={selectedHost}
        onSelectHost={selectHost}
      />
      <HeadQuarters
        hosts={decomHosts}
        areas={areas}
        onActivate={activateHost}
        onChangeArea={changeArea}
        selectedHost={selectedHost}
        onSelectHost={selectHost}
        currentNumHosts={currentNumHosts}
        activateDecomAll={handleAllHostsActivation}
      />
    </Segment>
  );
}

export default App;
