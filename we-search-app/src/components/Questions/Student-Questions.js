import React, { Component } from 'react';
import { Button, FormGroup, FieldGroup, FormControl, ControlLabel, Checkbox, Col, Grid, Row, Jumbotron, Panel, PageHeader, Radio} from 'react-bootstrap';
//import NavbarComponent from '../Nav/NavbarComponent';
import axios from "axios";
import {Redirect} from "react-router-dom";


export default class Questions extends Component {
    componentDidMount() {
    }

    constructor(props) {
	super(props);
	this.state = {
	    studentForm: {
		gpa: '',
		interest: '',
		location: '',
		willingMover: '',
		achieve: '',
		duration: '',
		career: '',
		commitment: '',
		university: '',
		university_switch: '',
		year: '',
		major: '',
		resume: '',
		cover_letter: '',
		uuid: this.props.location.state1
	    },
	    fireRedirect: 0,
	    studProf: this.props.location.state2
	};

	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(property, e) {	
	const studentForm = this.state.studentForm;
	studentForm[property] = e.target.value;
	this.setState({ studentForm: studentForm});
    }

    handleSubmit(event) {
	event.preventDefault();
    	axios.post('/api/newstudentform', {
            studentForm: this.state.studentForm
	}).then(response => {
	    if(response.data === "ok") {
		this.setState({fireRedirect: 1});
	    }
	}).catch(function (error) {
            console.log(error);
	});
    }

    render() {
	{/*this sets up redirect in component, from current page fireRedirect to root*/}
	const { from } = this.props.location.state || '/';
	const { fireRedirect } = this.state;
	const studentForm = this.state.studentForm;
	return (
	    <div>
	      
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
			<FormControl type='text' placeholder="Enter GPA ( Ex: 3.54 )" value={studentForm.gpa} onChange={this.handleChange.bind(this, "gpa")}>

			</FormControl>
		      </FormGroup>
		      
		      <FormGroup controlId='formControlsText'>
			<ControlLabel>Research Interests</ControlLabel>
			<FormControl type='text' placeholder="Research Interests" value={studentForm.interest} onChange={this.handleChange.bind(this, "interest")}>
			</FormControl>
		      </FormGroup>
		      
		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>Where do you live?</ControlLabel>
			<FormControl type="text" placeholder="City, ST" value={studentForm.location} onChange={this.handleChange.bind(this, "location")}>
			</FormControl>
		      </FormGroup>
		      
		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>Are you willing to move?</ControlLabel>
			<br/>
			<select value={studentForm.willingMover} onChange={this.handleChange.bind(this, "willingMover")}>
			  <option>Select</option>
			  <option>Yes</option>
			  <option>Maybe</option>
			  <option>No</option>
			</select>
		      </FormGroup>
		      
		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>What do you want to Achieve?</ControlLabel>
			<FormControl type="text" placeholder="Achieve" value={studentForm.achieve} onChange={this.handleChange.bind(this, "achieve")}>
			</FormControl>
		      </FormGroup>
		      
		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>How long are you planning to stay where you are?</ControlLabel>
			<FormControl type="text" placeholder="How long" value={studentForm.duration} onChange={this.handleChange.bind(this, "duration")}>
			</FormControl>
		      </FormGroup>
		      
		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>What is your career aspirtation?</ControlLabel>
			<FormControl type="text" placeholder="Career goals" value={studentForm.career} onChange={this.handleChange.bind(this, "career")}>
			</FormControl>
		      </FormGroup>
		      
		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>How many hours per week can you commit to doing research?</ControlLabel>
			<FormControl type="text" placeholder="" value={studentForm.commitment} onChange={this.handleChange.bind(this, "commitment")}>
			</FormControl>
		      </FormGroup>
		      
		      <FormGroup controlId="formControlsSelect">
			<ControlLabel>Which univeristy do you attend?</ControlLabel>
			<br/>
			<select value={studentForm.university} onChange={this.handleChange.bind(this, "university")}>
			  <option>Select</option>
			  <option>UCLA</option>
			  <option>USC</option>
			</select>
		      </FormGroup>
		      
		      <FormGroup controlId="formControlsSelect">
			<ControlLabel>What year are you?</ControlLabel>
			<select value={studentForm.year} onChange={this.handleChange.bind(this, "year")}>
			  <option>Select</option>
			  <option>High School</option>
			  <option>First Year</option>
			  <option>Second Year</option>
			  <option>Third Year</option>
			  <option>Fourth Year</option>
			  <option>Fifth Year or More</option>
			</select>
			
		      </FormGroup>

		      <FormGroup controlId="formControlsSelect">
			<ControlLabel>What university do you plan to work at?</ControlLabel>
			<br/>
			<select value={studentForm.university_switch} onChange={this.handleChange.bind(this, "university_switch")}>
			  <option>Select</option>
			  <option>UCLA</option>
			  <option>USC</option>
			</select>
		      </FormGroup>                                                                                 

		      <FormGroup controlId="formControlsSelect">
			<ControlLabel>What major are you?</ControlLabel>
			<select value={studentForm.major} onChange={this.handleChange.bind(this, "major")}>
			  <option>Select</option>
			  <option>Biology/Pre-Med</option>
			  <option>Theatre Technology</option>
			</select>
		      </FormGroup>

		      <FormGroup controlId='formControlsFile' value={studentForm.resume} onChange={this.handleChange.bind(this, "resume")}>
			<ControlLabel>Resume Upload</ControlLabel>
			<FormControl type='file' />
   		      </FormGroup>
		      
		      <FormGroup controlId='formControlsFile' value={studentForm.cover_letter} onChange={this.handleChange.bind(this, "cover_letter")}>
			<ControlLabel>Cover Letter Upload</ControlLabel>
			<FormControl type='file' />
   		      </FormGroup>
		      
		      <Button type="submit">
			Submit
		      </Button>
		    </form>
		    {(this.state.fireRedirect == 1) ?
		    (<Redirect to='/'/>) : null}
	    </Col>
		</Row>


	    </Grid>
		</div>
	);
    }
}
