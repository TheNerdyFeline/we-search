import React, { Component } from 'react';
import { Button, Form, FormGroup, FieldGroup, FormControl, ControlLabel, Checkbox, Col, Grid, Row, Jumbotron, Panel, PageHeader, Radio, select} from 'react-bootstrap';
import NavbarComponent from '../Nav/NavbarComponent';
import axios from 'axios';

export default class Questions extends Component {
    constructor(props) {
	super(props);	
	this.state = {
	
			gpa: "", 
			research_interest: "", 
			live: "", 
			move: "", 
			achieve: "", 
			stay_here: "", 
			career: "",
			time_week: "",
			available: "",
			cv:""

		};
	this.handleGPAChange = this.handleGPAChange.bind(this);
	this.handleResearchChange = this.handleResearchChange.bind(this);
	this.handleLiveChange = this.handleLiveChange.bind(this);
	this.handleMoveChange = this.handleMoveChange.bind(this);
	this.handleAchieveChange = this.handleAchieveChange.bind(this);
	this.handleStayChange = this.handleStayChange.bind(this);
	this.handleCareerChange = this.handleCareerChange.bind(this);
	this.handleTimeChange = this.handleTimeChange.bind(this);
	this.handleAvailableChange = this.handleAvailableChange.bind(this);
	this.handleCVChange = this.handleCVChange.bind(this);

	this.submitForm = this.submitForm.bind(this);
    }

    handleGPAChange(event) {
    	this.setState({gpa: event.target.value});
  	}

  	handleResearchChange(event) {
  		this.setState({research_interest: event.target.value});
  	}

  	handleLiveChange(event) {
  		this.setState({live: event.target.value});
  	}

  	handleMoveChange(event) {
  		this.setState({move: event.target.value});
  	}

  	handleAchieveChange(event) {
  		this.setState({achieve: event.target.value});
  	}

  	handleStayChange(event) {
  		this.setState({stay_here: event.target.value});
  	}

  	handleCareerChange(event) {
  		this.setState({career: event.target.value});
  	}

  	handleTimeChange(event) {
  		this.setState({time_week: event.target.value});
  	}

  	handleAvailableChange(event) {
  		this.setState({available: event.target.value});
  	}

  	handleCVChange(event) {
  		this.setState({cv: event.target.value});
  	}

  	submitForm(event) {
  	    axios.post('/login', { 
		gpa: this.state.gpa, 
		interest: this.state.interest, 
		location: this.state.location, 
		willingMover: this.state.willingMover, 
		achieve: this.state.achieve, 
		duration: this.state.duration, 
		aspirtation: this.state.aspiration,
		commitment: this.state.commitment,
		cv: this.state.cv
	    }).then(response => {
		console.log(response);
		console.log("this is not the error");
	    }).catch(function (error) {
		console.log(error);
	    });
  	}

    componentDidUpdate(prevProps, prevState){
	if (prevState.search != this.state.search){
	    // once all fields complete save to db
	    //add routes
	}
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
		    <form onSubmit={this.submitForm}>
		      <FormGroup controlId='formControlsText'>
			<ControlLabel>What is the minium GPA you are looking for?</ControlLabel>
			<FormControl type='text' placeholder="Enter GPA ( Ex: 3.54 )" value={this.state.value} onChange={this.handleGPAChange}>
			</FormControl>
		      </FormGroup>
		      
		      <FormGroup controlId='formControlsText'>
			<ControlLabel>Research Interests</ControlLabel>
			<FormControl type='text' placeholder="Research Interests" value={this.state.value} onChange={this.handleResearchChange}>
			</FormControl>
		      </FormGroup>
		      
		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>Where do you live?</ControlLabel>
			<FormControl placeholder="City, ST" value={this.state.value} onChange={this.handleLiveChange}>
			</FormControl>
		      </FormGroup>
		      
		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>What do you want your students to achieve?</ControlLabel>
			<FormControl placeholder="Achieve" value={this.state.value} onChange={this.handleAchieveChange}>
			</FormControl>
		      </FormGroup>
		      
		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>How long are you willing to work long distance?</ControlLabel>
			<FormControl placeholder="How long" value={this.state.value} onChange={this.handleStayChange}>
			</FormControl>
		      </FormGroup>
		      
		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>What are you looking for in a student?</ControlLabel>
			<FormControl placeholder="Career goals" value={this.state.value} onChange={this.handleCareerChange}>
			</FormControl>
		      </FormGroup>
		      
		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>How many hours per week can you commit to doing research?</ControlLabel>
			<FormControl placeholder="" value={this.state.value} onChange={this.handleTimeChange}>
			</FormControl>
		      </FormGroup>

		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>Do you have any openings in you research department?</ControlLabel>
			<br/>
			  <select value={this.state.value} onChange={this.handleAvailableChange}>
			  	<option>Yes</option>
			  	<option>No</option>
		  	  </select>
		      </FormGroup>

		      <FormGroup controlId='formControlsFile'>
			<ControlLabel>CV Upload</ControlLabel>
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
