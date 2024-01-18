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

function HostInfo({host, updateSelectedHost, areas, onActivate, onChangeArea}) {
  const { imageUrl, firstName, gender, active, area} = host
  
  function formatName(name){
    let formattedName;
    if (name.includes("_")){
      const nameArr = name.split("_")
      formattedName = nameArr.map(name => name.charAt(0).toUpperCase() + name.slice(1)).join(' ')
    } else {
      formattedName = name.charAt(0).toUpperCase() + name.slice(1)
    }
    return formattedName
  }

  const areaOptions = areas.map(area => 
    {return {
      key: area.name, 
      text: formatName(area.name), 
      value: area.name}})
  
  function handleOptionChange(e, { value }) {
    updateSelectedHost({...host, area: value})
    onChangeArea(host, value)
  }

  function handleRadioChange() {
    updateSelectedHost({...host, active:!active})
    onActivate(host)
  }

  return (
    <Grid>
      <Grid.Column width={6}>
        <Image
          src={imageUrl}
          floated="left"
          size="small"
          className="hostImg"
        />
      </Grid.Column>
      <Grid.Column width={10}>
        <Card>
          <Card.Content>
            <Card.Header>
              {firstName} | {gender ===  "Male"? <Icon name="man" /> : <Icon name="woman" />}
            </Card.Header>
            <Card.Meta>
              <Radio
                onChange={handleRadioChange}
                label={active ? "Active" : "Decommissioned"}
                checked={active}
                slider
              />
            </Card.Meta>
            <Divider />
            Current Area:
            <Dropdown
              onChange={handleOptionChange}
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
