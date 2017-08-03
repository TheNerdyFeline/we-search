import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Col, Grid, Row, Jumbotron, select} from 'react-bootstrap';
//import NavbarComponent from '../Nav/NavbarComponent';
import axios from 'axios';
import {Redirect} from "react-router-dom";

export default class Questions extends Component {
    componentDidMount() {
	console.log(this.state.studProf);
    }
    
    constructor(props) {
	super(props);	
	this.state = {
	    profForm: {
		gpa: "", 
		interest: "", 
		location: "", 
		achieve: "", 
		long_dist: "", 
		career: "",
		hours_week: "",
		available: "",
		university: '',
		duration: '',
		field: '',
		commitment: '',
		cv:"",
		uuid: this.props.location.state1
	    },
	    fireRedirect: 0,
	    studProf: this.props.location.state2
	};
	
	this.handleChange = this.handleChange.bind(this);
	this.submitForm = this.submitForm.bind(this);
    }

    handleChange(property, e) {
    	const profForm = this.state.profForm;
	profForm[property] = e.target.value;
	this.setState({ profForm: profForm});
    }

    submitForm(event) {
	event.preventDefault();
  	axios.post('/api/newprofessorform', { 
	    profForm: this.state.profForm
	}).then(response => {
	    console.log(response.data);
	    if(response.data === "ok") {
		this.setState({fireRedirect: 1});
	    }
	}).catch(function (error) {
	    console.log(error);
	});
    }

    render() {
	const profForm = this.state.profForm;
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
		    <form onSubmit={this.submitForm}>
		      <FormGroup controlId='formControlsText'>
			<ControlLabel>What is the minium GPA you are looking for?</ControlLabel>
			<FormControl type='text' placeholder="Enter GPA ( Ex: 3.54 )" value={profForm.gpa} onChange={this.handleChange.bind(this, "gpa")}>
			</FormControl>
		      </FormGroup>
		      
		      <FormGroup controlId='formControlsText'>
			<ControlLabel>Research Interests</ControlLabel>
			<FormControl type='text' placeholder="Research Interests" value={profForm.interest} onChange={this.handleChange.bind(this, "interest")}>
			</FormControl>
		      </FormGroup>
		      
		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>Where do you live?</ControlLabel>
			<FormControl placeholder="City, ST" value={profForm.location} onChange={this.handleChange.bind(this, "location")}>
			</FormControl>
		      </FormGroup>
		      
		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>What do you want your students to achieve?</ControlLabel>
			<FormControl placeholder="Achieve" value={profForm.achieve} onChange={this.handleChange.bind(this, "achieve")}>
			</FormControl>
		      </FormGroup>
		      
		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>How long are you willing to work long distance?</ControlLabel>
			<FormControl placeholder="How long" value={profForm.long_dist} onChange={this.handleChange.bind(this, "long_dist")}>
			</FormControl>
		      </FormGroup>
		      
		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>What are you looking for in a student?</ControlLabel>
			<FormControl placeholder="Career goals" value={profForm.career} onChange={this.handleChange.bind(this, "career")}>
			</FormControl>
		      </FormGroup>
		      
		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>How many hours per week can you commit to doing research?</ControlLabel>
			<FormControl placeholder="" value={profForm.hours_week} onChange={this.handleChange.bind(this, "hours_week")}>
			</FormControl>
		      </FormGroup>

		      <FormGroup controlId="formControlsSelect">
      			<ControlLabel>Do you have any openings in you research department?</ControlLabel>
			<br/>
			<select value={profForm.available} onChange={this.handleChange.bind(this, "available")}>
			  <option>Yes</option>
			  <option>No</option>
		  	</select>
		      </FormGroup>


		      <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Which univeristy are you affiliated with?</ControlLabel>
                        <br/>
                        <select value={profForm.university} onChange={this.handleChange.bind(this, "university")}>
                          <option>Select</option>
                          <option>UCLA</option>
                          <option>USC</option>
                        </select>                        
                      </FormGroup>
                      
                      <FormGroup controlId="formControlsSelect">
                        <ControlLabel>How long have you been doing research in this discipline?</ControlLabel>
                        <FormControl type='number' placeholder="0" value={profForm.duration} onChange={this.handleChange.bind(this, "duration")}/>
                      </FormGroup>

                      <FormGroup controlId="formControlsSelect">
                        <ControlLabel>What field do you work in?</ControlLabel>
                        <br/>
                        <select value={profForm.field} onChange={this.handleChange.bind(this, "field")}>
                          <option>Select</option>
                          <option>Medical/Pre-med</option>
                          <option>Theatre</option>
                        </select>
                      </FormGroup>
                      
		      <FormGroup controlId='formControlsFile'>
			<ControlLabel>CV Upload</ControlLabel>
			<FormControl type='file' value={profForm.cv} onChange={this.handleChange.bind(this, "cv")}/>
   		      </FormGroup>
		      
		      <Button type="submit">
			Submit
		      </Button>
		    </form>
		    {(this.state.fireRedirect === 1) ?
		    (<Redirect to='/'/>) : null}
	    </Col>
		</Row>


	    </Grid>
		</div>
	);
    }
}
