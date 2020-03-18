import React, { useState, useEffect } from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area'

const areasURL = "http://localhost:4000/areas"


const WestworldMap = (props) => {

  const [areas, setAreas] = useState([])

  useEffect( () =>
  {
    fetch(areasURL).then(resp=>resp.json()).then(
      content=> setAreas(content)
    )
  },[])


  return (
    <Segment id="map" >
      {areas.map(area => <Area area={area} key={area.id} hosts={props.hosts} SelectHost={props.SelectHost} selectedHost={props.selectedHost}/>)}
    </Segment>
  )
}

export default WestworldMap
