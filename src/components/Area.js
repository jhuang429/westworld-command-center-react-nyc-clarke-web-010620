import React from 'react';
import '../stylesheets/Area.css'
import HostList from "./HostList"

const Area = (props) => (

  <div className='area' id={props.area.name}>
    <h3 className='labels'>{props.area.name.split("_").map(word=>(word.charAt(0).toUpperCase() + word.substr(1))).join(" ")}</h3>

    <HostList hosts={props.hosts.filter(host=>host.area === props.area.name)} SelectHost={props.SelectHost} selectedHost={props.selectedHost}/>

  </div>

)

Area.propTypes = {
  hosts: function(props, propName, componentName){
    if(props.hosts.length > props.limit){
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      )
    }
  }
}

export default Area;
