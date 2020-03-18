import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const Host = (props) => {

  return(
    <Card
      className={props.selectedHost && props.selectedHost.id === props.host.id ? "host selected" : "host" }
      /* NOTE: The className "host selected" renders a different style than simply "host". */
      onClick={()=>props.SelectHost(props.host)}
      image={props.host.imageUrl}
      raised
    />
  )
}

export default Host
