import React, { Component } from 'react';
import { Button, ButtonGroup, Form, FormGroup, FieldGroup, FormControl, ControlLabel, Checkbox, Col, Grid, Row, Jumbotron, Panel, PageHeader, Radio} from 'react-bootstrap';
import NavbarComponent from '../Nav/NavbarComponent';

export default class Questions extends Component {

	constructor(props) {
	    super(props);
	    this.state = {

	    	gpa: '',
	    	interest: '',
	    	location: '',
	    	willingMover: '',
	    	achieve: '',
	    	duration: '',
	    	aspirtation: '',
	    	commitment: ''
		};

	    this.handleGPAChange = this.handleGPAChange.bind(this);
	    this.handleInterestChange = this.handleInterestChange.bind(this);
	    this.handleLocationChange = this.handleLocationChange.bind(this);
	    this.handleWillingMoverChange = this.handleWillingMoverChange.bind(this);
	    this.handleAchieveChange = this.handleAchieveChange.bind(this);
	    this.handleDurationChange = this.handleDurationChange.bind(this);
	    this.handleAspirationChange = this.handleAspirationChange.bind(this);
	    this.handleCommitmentChange = this.handleCommitmentChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
  	}

  	handleGPAChange(event) {
    	this.setState({gpa: event.target.value});
  	}

  	handleInterestChange(event) {
  		this.setState({interest: event.target.value});
  	}

  	handleLocationChange(event) {
  		this.setState({location: event.target.value});
  	}

  	handleWillingMoverChange(event) {
  		this.setState({willingMover: event.target.value});
  	}

  	handleAchieveChange(event) {
  		this.setState({achieve: event.target.value});
  	}

  	handleDurationChange(event) {
  		this.setState({duration: event.target.value});
  	}

  	handleAspirationChange(event) {
  		this.setState({aspirtation: event.target.value});
  	}

  	handleCommitmentChange(event) {
  		this.setState({commitment: event.target.value});
  	}

  	handleSubmit(event) {
    	alert('A name was submitted: ' + this.state.gpa + " "+ this.state.interest + " " + this.state.location + " " + this.state.willingMover + " " + this.state.achieve + " " + this.state.duration + " " + this.state.aspirtation + " " + this.state.commitment);
    	event.preventDefault();
  	}

    render() {
	return (
	    <div>
	      <NavbarComponent/>
	      <Grid>
		<Jumbotron className='text-center'>  
		  <Row>
		    <Col xs={2}></Col>
		    <Col xs={8}>
		      <h1>Survey Questions</h1>
		    </Col>
		    <Col xs={2}></Col>
		  </Row>
		</Jumbotron>
		
		<Row>
		  <Col lg={12}>
		    <h4>About You</h4>
		  </Col>
		</Row>
		<Row>
		  <Col lg={12}>
		    <form onSubmit={this.handleSubmit}>
		      <FormGroup controlId='formControlsText'>
			<ControlLabel>GPA</ControlLabel>
			<FormControl type='text' placeholder="Enter GPA ( Ex: 3.54 )" value={this.state.value} onChange={this.handleGPAChange}>

			</FormControl>
		      </FormGroup>
		      
		      <FormGroup controlId='formControlsText'>
			<ControlLabel>Research Interests</ControlLabel>
			<FormControl type='text' placeholder="Research Interests" value={this.state.value} onChange={this.handleInterestChange}>
			</FormControl>
		      </FormGroup>
		      
		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>Where do you live?</ControlLabel>
			<FormControl type="text" placeholder="City, ST" value={this.state.value} onChange={this.handleLocationChange}>
			</FormControl>
		      </FormGroup>
			
		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>Are you willing to move?</ControlLabel>
				<br/>
			  	<select value={this.state.value} onChange={this.handleWillingMoverChange}>
			  		<option>Select</option>
			  		<option>Yes</option>
			  		<option>Maybe</option>
			  		<option>No</option>
		  		</select>
		      </FormGroup>
		      
		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>What do you want to Achieve?</ControlLabel>
			<FormControl type="text" placeholder="Achieve" value={this.state.value} onChange={this.handleAchieveChange}>
			</FormControl>
		      </FormGroup>
		      
		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>How long are you planning to stay where you are?</ControlLabel>
			<FormControl type="text" placeholder="How long" value={this.state.value} onChange={this.handleDurationChange}>
			</FormControl>
		      </FormGroup>
		      
		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>What is your career aspirtation?</ControlLabel>
			<FormControl type="text" placeholder="Career goals" value={this.state.value} onChange={this.handleAspirationChange}>
			</FormControl>
		      </FormGroup>
		      
		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>How many hours per week can you commit to doing research?</ControlLabel>
			<FormControl type="text" placeholder="" value={this.state.value} onChange={this.handleCommitmentChange}>
			</FormControl>
		      </FormGroup>

		      <FormGroup controlId='formControlsFile'>
			<ControlLabel>Resume Upload</ControlLabel>
			<FormControl type='file' />
   		      </FormGroup>
		      
		      <FormGroup controlId='formControlsFile'>
			<ControlLabel>Cover Letter Upload</ControlLabel>
			<FormControl type='file' />
   		      </FormGroup>
		      
		      <Button type="submit">
			Submit
		      </Button>
		    </form>
		  </Col>
		</Row>


	      </Grid>
	    </div>
	);
    }
}
