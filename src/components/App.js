import React, {useEffect, useState} from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import WestworldMap from "./WestworldMap"
import HeadQuarters from "./Headquarters"

function App() {
  const [allHosts, setAllHosts] = useState([])
  const [areas, setAreas] = useState([])
  const [selectedHost, setSelectedHost] = useState("")

  const activeHosts = allHosts.filter(host => host.active === true)
  const decomHosts = allHosts.filter(host => host.active === false)

  useEffect(() => {
    fetch('http://localhost:3001/hosts')
      .then(resp => resp.json())
      .then(data => setAllHosts(data))
  }, [])

  useEffect(() => {
    fetch('http://localhost:3001/areas')
      .then(resp => resp.json())
      .then(data => setAreas(data))
  }, [])

  function activateHost(host){
    const { id, active } = host;
    const updatedHosts = allHosts.map(host => 
      (host.id === id ? {...host, active:!active} : host))
    setAllHosts(updatedHosts)
  }

  function changeArea(host, value){
    const { id } = host;
    const updatedHosts = allHosts.map(host => 
      (host.id === id ? {...host, area:value} : host))
    setAllHosts(updatedHosts)
  }

  return (
    <Segment id="app">
      <WestworldMap 
        areas={areas}
        hosts={activeHosts}
        onActivate={activateHost}
        onChangeArea={changeArea}
        selectedHost={selectedHost}
        selectHost={setSelectedHost}/>
      <HeadQuarters 
        hosts={decomHosts}
        areas={areas}
        onActivate={activateHost}
        onChangeArea={changeArea}
        selectedHost={selectedHost}
        selectHost={setSelectedHost}/>
    </Segment>
  );
}

export default App;
