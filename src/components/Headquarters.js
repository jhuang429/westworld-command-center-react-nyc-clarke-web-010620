import React, { Component } from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';
import Details from './Details'
import ColdStorage from './ColdStorage';
// import LogPanel from './LogPanel';


class Headquarters extends Component {

  render(){
    return(
      <Grid celled='internally'>
        <Grid.Column width={8}>

        <ColdStorage hosts={this.props.hosts} SelectHost={this.props.SelectHost} selectedHost={this.props.selectedHost}/>

        </Grid.Column>
        <Grid.Column width={5}>
          <Details selectedHost={this.props.selectedHost} updateActive={this.props.updateActive} updateArea={this.props.updateArea}/>
        </Grid.Column>
        <Grid.Column width={3}>

        {/* <LogPanel /> */}

        </Grid.Column>
      </Grid>
    )
  }
}

export default Headquarters;
