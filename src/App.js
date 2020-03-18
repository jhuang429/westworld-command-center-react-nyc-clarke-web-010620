import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap'
import Headquarters from './components/Headquarters'


const hostURL = "http://localhost:4000/hosts"

class App extends Component {

  state = {hosts:[],
  selectedHost: null}  

  componentDidMount() {
    fetch(hostURL).then(resp=>resp.json()).then(
      content=> this.setState({hosts: content})
    )
  }

  SelectHost = (hostObj) => {
    this.setState({selectedHost: hostObj})
  }

  updateActive = () => {
    this.setState(prevState => ({selectedHost: {...prevState.selectedHost, active: !prevState.selectedHost.active}}))
    this.setState(prevState=> ({hosts: prevState.hosts.map(host=> host.id === prevState.selectedHost.id ? prevState.selectedHost : host)}))
  }

  updateArea= (str) => {
    this.setState(prevState => ({selectedHost: {...prevState.selectedHost, area: str}}))
    this.setState(prevState=> ({hosts: prevState.hosts.map(host=> host.id === prevState.selectedHost.id ? prevState.selectedHost : host)}))
  }

  render(){
    return (
      <Segment id='app'>
        <WestworldMap hosts={this.state.hosts.filter(host=> host.active === true)} SelectHost={this.SelectHost} selectedHost={this.state.selectedHost}/>
        <Headquarters hosts={this.state.hosts.filter(host=> host.active === false)} SelectHost={this.SelectHost} selectedHost={this.state.selectedHost} updateActive={this.updateActive} updateArea={this.updateArea}/>
      </Segment>
    )
  }
}

export default App;
