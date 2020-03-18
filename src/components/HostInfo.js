import '../stylesheets/HostInfo.css'
import React, { Component } from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react'


class HostInfo extends Component {
  state = {
    options: [
      {key: "high_plains", text: "High Plains", value: "high_plains"},
      {key: "python_pass", text: "Python Pass", value: "python_pass"},
      {key: "lowlands", text: "Lowlands", value: "lowlands"},
      {key: "badland", text: "Badlands", value: "badland"},
      {key: "pariah", text: "Pariah", value: "pariah"},
      {key: "under_construction", text: "Under Construction", value: "under_construction"}
    ]
    // This state is just to show how the dropdown component works.
    // Options have to be formatted in this way (array of objects with keys of: key, text, value)
    // Value has to match the value in the object to render the right text.

    // IMPORTANT: But whether it should be stateful or not is entirely up to you. Change this component however you like.
  }



  handleChange = (e, {value}) => {
    this.setState({value})
    this.props.updateArea(value)
      // the 'value' attribute is given via Semantic's Dropdown component.
      // Put a debugger in here and see what the "value" variable is when you pass in different options.
      // See the Semantic docs for more info: https://react.semantic-ui.com/modules/dropdown/#usage-controlled
  }

  toggle = () => {
    this.props.updateActive();
  }

  render(){
    const {firstName, lastName, imageUrl, gender, active} = this.props.host
    return (
      <Grid>
        <Grid.Column width={6}>
          <Image
            src={imageUrl}
            floated='left'
            size='small'
            className="hostImg"
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Card>
            <Card.Content>
              <Card.Header>
                {firstName} {lastName} | { gender==="Male" ? <Icon name='man' /> : <Icon name='woman' />}
                { /* Think about how the above should work to conditionally render the right First Name and the right gender Icon */ }
              </Card.Header>
              <Card.Meta>
                <Radio
                  onChange={this.toggle}
                  label={active ? "Active" : "Decommissioned"}
                  checked={active}
                  slider
                />
              </Card.Meta>

              <Divider />
              Current Area:
              <Dropdown
                onChange={this.handleChange}
                value={this.props.host.area}
                options={this.state.options}
                selection
              />
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}

export default HostInfo
