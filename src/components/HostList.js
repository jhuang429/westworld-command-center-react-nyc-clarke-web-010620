import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

const HostList = (props) => {

  return(
    <Card.Group itemsPerRow={6}>
      {props.hosts.map(host=><Host host={host} SelectHost={props.SelectHost} selectedHost={props.selectedHost}/>)}
    </Card.Group>
  )
}

export default HostList
