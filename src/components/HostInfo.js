import React from "react";
import {
  Radio,
  Icon,
  Card,
  Grid,
  Image,
  Dropdown,
  Divider,
} from "semantic-ui-react";
import "../stylesheets/HostInfo.css";
import { Log } from "../services/Log";

function HostInfo({
  host,
  areas,
  onActivate,
  onChangeArea,
  currentNumHosts,
  onNewLog,
}) {
  const { imageUrl, firstName, gender, active, area } = host;

  const areaLimits = {};

  areas.forEach((area) => {
    areaLimits[area.name] = area.limit;
  });

  function formatName(name) {
    let formattedName;
    if (name.includes("_")) {
      const nameArr = name.split("_");
      formattedName = nameArr
        .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
        .join(" ");
    } else {
      formattedName = name.charAt(0).toUpperCase() + name.slice(1);
    }
    return formattedName;
  }

  const areaOptions = areas.map((area) => {
    return {
      key: area.name,
      text: formatName(area.name),
      value: area.name,
    };
  });

  function handleAreaChange(e, { value }) {
    if (currentNumHosts[value] >= areaLimits[value]) {
      onNewLog(
        Log.error(
          `Too many hosts. Cannot add ${firstName} to ${formatName(value)}`
        )
      );
    } else {
      onChangeArea(host, value);
      onNewLog(Log.notify(`${firstName} set in area ${formatName(value)}`));
    }
  }

  function handleActivationChange() {
    onActivate(host);
    active === true
      ? onNewLog(Log.notify(`Decommissioned ${firstName}`))
      : onNewLog(Log.warn(`Activated ${firstName}`));
  }

  return (
    <Grid>
      <Grid.Column width={6}>
        <Image src={imageUrl} floated="left" size="small" className="hostImg" />
      </Grid.Column>
      <Grid.Column width={10}>
        <Card>
          <Card.Content>
            <Card.Header>
              {firstName} |{" "}
              {gender === "Male" ? <Icon name="man" /> : <Icon name="woman" />}
            </Card.Header>
            <Card.Meta>
              <Radio
                onChange={handleActivationChange}
                label={active ? "Active" : "Decommissioned"}
                checked={active}
                slider
              />
            </Card.Meta>
            <Divider />
            Current Area:
            <Dropdown
              onChange={handleAreaChange}
              value={area}
              options={areaOptions}
              selection
            />
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );
}

export default HostInfo;
