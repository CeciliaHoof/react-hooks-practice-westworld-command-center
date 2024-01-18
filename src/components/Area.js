import React from "react";
import "../stylesheets/Area.css";
import HostList from "./HostList";

function Area({
  area,
  hosts,
  onActivate,
  onChangeArea,
  selectedHost,
  onSelectHost,
}) {
  const { name } = area;
  let formattedName;
  if (name.includes("_")) {
    const nameArr = name.split("_");
    formattedName = nameArr
      .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
      .join(" ");
  } else {
    formattedName = name.charAt(0).toUpperCase() + name.slice(1);
  }

  const areaHosts = hosts.filter((host) => host.area === name);

  return (
    <div className="area" id={name}>
      <h3 className="labels">
        {
          formattedName /* Don't just pass in the name from the data...clean that thing up */
        }
      </h3>
      <HostList
        hosts={areaHosts}
        onActivate={onActivate}
        onChangeArea={onChangeArea}
        selectedHost={selectedHost}
        onSelectHost={onSelectHost}
      />
    </div>
  );
}

export default Area;
