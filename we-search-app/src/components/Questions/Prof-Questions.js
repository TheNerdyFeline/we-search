import React, { Component } from 'react';
import { Button, Form, FormGroup, FieldGroup, FormControl, ControlLabel, Checkbox, Col, Grid, Row, Jumbotron, Panel, PageHeader, Radio} from 'react-bootstrap';
import NavbarComponent from '../Nav/NavbarComponent';

export default class Questions extends Component {
    constructor(props) {
	super(props);	
	this.state = {prof_form: {gpa: "", research_interest: "", live: "", move: "", achieve: "", stay_here: "", career: "", time_week: "", resume:"", cover_letter: "", uuid: ""}};

	this.submitForm = this.submitForm.bind(this);
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
		    <form>
		      <FormGroup controlId='formControlsText'>
			<ControlLabel>What is the minium GPA you are look for?</ControlLabel>
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
      			<ControlLabel>What do you want your students to achieve?</ControlLabel>
			<FormControl componentClass="text" placeholder="Achieve">
			</FormControl>
		      </FormGroup>
		      
		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>How long are you will to work long distance?</ControlLabel>
			<FormControl componentClass="text" placeholder="How long">
			</FormControl>
		      </FormGroup>
		      
		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>What are you looking for in a student?</ControlLabel>
			<FormControl componentClass="text" placeholder="Career goals">
			</FormControl>
		      </FormGroup>
		      
		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>How many hours per week can you commit to doing research?</ControlLabel>
			<FormControl componentClass="text" placeholder="">
			</FormControl>
		      </FormGroup>

		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>Do you have any openings in you research department?</ControlLabel>
			<br/>
			  <Radio active>Yes</Radio>
			  <Radio>No</Radio>
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
