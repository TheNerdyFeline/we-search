import React, { Component } from 'react';
import { Button, ButtonGroup, Form, FormGroup, FieldGroup, FormControl, ControlLabel, Checkbox, Col, Grid, Row, Jumbotron, Panel, PageHeader, Radio} from 'react-bootstrap';
import NavbarComponent from '../Nav/NavbarComponent';

export default class Questions extends Component {

	constructor(props) {
	    super(props);
	    this.state = {

	    	name: '',
	    	gpa: '',
	    	q1: '',
	    	q2: '',
	    	q3: '',
	    	q4: '',
	    	q5: '',
	    	q6: '',
	    	q7: '',
	    	q8: '',
	    	q9: '',
	    	q10: ''
		};

	    this.handleNameChange = this.handleNameChange.bind(this);
	    this.handleGPAChange = this.handleGPAChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
  	}

  	handleGPAChange(event) {
    	this.setState({gpa: event.target.value});
  	}

  	handleNameChange(event) {
  		this.setState({name: event.target.value});
  	}

  	handleSubmit(event) {
    	alert('A name was submitted: ' + this.state.gpa + ' ' + this.state.name + " " + this.state.q1);
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
			<FormControl type='text' placeholder="Enter GPA ( Ex: 3.54 )">

			</FormControl>
		      </FormGroup>
		      
		      <FormGroup controlId='formControlsText'>
			<ControlLabel>Research Interests</ControlLabel>
			<FormControl type='text' placeholder="Research Ineterests">
			</FormControl>
		      </FormGroup>
		      
		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>Where do you live?</ControlLabel>
			<FormControl componentClass="text" placeholder="City, ST">
			</FormControl>
		      </FormGroup>
			
		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>Are you willing to move?</ControlLabel>
			<br/>
			  <Radio>Yes</Radio>
			  <Radio>No</Radio>
			  <Radio>Maybe</Radio>
		      </FormGroup>
		      
		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>What do you want to Achieve?</ControlLabel>
			<FormControl componentClass="text" placeholder="Achieve">
			</FormControl>
		      </FormGroup>
		      
		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>How long are you planning to stay where you are?</ControlLabel>
			<FormControl componentClass="text" placeholder="How long">
			</FormControl>
		      </FormGroup>
		      
		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>What is your career aspirtation?</ControlLabel>
			<FormControl componentClass="text" placeholder="Career goals">
			</FormControl>
		      </FormGroup>
		      
		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>How many hours per week can you commit to doing research?</ControlLabel>
			<FormControl componentClass="text" placeholder="">
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
