import React, { Component } from 'react';
import { Button, ButtonGroup, Form, FormGroup, FieldGroup, FormControl, ControlLabel, Checkbox, Col, Grid, Row, Jumbotron, Panel, PageHeader, Radio, Table } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import axios from "axios";

const title2 = (
    <h3>Edit Question Answers</h3>
);

class StudentEditQuestions extends Component {
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
		uuid: this.props.uuid
	    }
	};

	this.handleChange = this.handleChange.bind(this);
	this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleChange(property, e) {	
	const studentForm = this.state.studentForm;
	studentForm[property] = e.target.value;
	this.setState({ studentForm: studentForm});
    }

    handleUpdate(event) {
	event.preventDefault();
    	axios.put('/api/updatestudentform', {
            studentForm: this.state.studentForm
	}).then(response => {
	    if(response.data === "ok") {
	    }
	}).catch(function (error) {
            console.log(error);
	});
    }
    componentWillMount() {
	axios.get("/api/studentform", {
	}).then(response => {
	    this.setState({
		studentForm: {
		    gpa: response.data.gpa,
		    interest: response.data.research_interest,
		    location: response.data.location,
		    willingMover: response.data.move,
		    achieve: response.data.achieve,
		    duration: response.data.duration,
		    career: response.data.career,
		    commitment: response.data.hours_week,
		    university: response.data.university,
		    university_switch: response.data.university_switch,
		    year: response.data.year,
		    major: response.data.major,
		    resume: response.data.resume,
		    cover_letter: response.data.cover_letter,
		    uuid: response.data.uuid
		}
	    });	    
	}).catch(function (error) {
	    console.log(error);
	});
    }

    
    render() {
	const studentForm = this.state.studentForm;
	
      	return(
      	    <div>
	      <Table striped bordered condensed hover>
		<tbody>
		  <tr>		    
		    <th>GPA?</th>
		    <td>
		      <form>
			<FormGroup>
			  <FormControl type="text" value={studentForm.gpa} onChange={this.handleChange.bind(this, "gpa")}/>
			</FormGroup>
		      </form>
		    </td>
		  </tr>

		  <tr>		    
		    <th>Research Interests</th>
		    <td>
		      <form>
			<FormGroup>
			  <FormControl type="text" value={studentForm.interest} onChange={this.handleChange.bind(this, "interest")}/>
			</FormGroup>
		      </form>
		    </td>
		  </tr>

		  <tr>
		    <th>Where do you live?</th>
		    <td>
		      <form>
			<FormGroup>
			  <FormControl type="text" value={studentForm.location} onChange={this.handleChange.bind(this, "location")}/>
			</FormGroup>
		      </form>
		    </td>
		  </tr>

		  <tr>
		    <th>Are you willing to move?</th>
		    <td>
		      <form>
			<FormGroup>
			  <FormControl type="text" value={studentForm.willingMover} onChange={this.handleChange.bind(this, "willingMover")}/>
			</FormGroup>
		      </form>
		    </td>
		  </tr>

		  <tr>
		    <th>What do you want to Achieve?</th>
		    <td>
		      <form>
			<FormGroup>
			  <FormControl type="text" value={studentForm.achieve} onChange={this.handleChange.bind(this, "achieve")}/>
			</FormGroup>
		      </form>
		    </td>
		  </tr>

		  <tr> 
		    <th>How long are you planning to stay where you are?</th>
		    <td>
		      <form>
			<FormGroup>
			  <FormControl type="text" value={studentForm.duration} onChange={this.handleChange.bind(this, "duration")}/>
			</FormGroup>
		      </form>
		    </td>
		  </tr>

		  <tr>
		    <th>What is your career aspirtation?</th>
		    <td>
		      <form>
			<FormGroup>
			  <FormControl type="text" value={studentForm.career} onChange={this.handleChange.bind(this, "career")}/>
			</FormGroup>
		      </form>
		    </td>
		  </tr>

		  <tr>
		    <th>How many hours per week can you commit to doing research?</th>
		    <td>
		      <form>
			<FormGroup>
			  <FormControl type="text" value={studentForm.commitment} onChange={this.handleChange.bind(this, "commitment")}/>
			</FormGroup>
		      </form>
		    </td>
		  </tr>

		  <tr>
		    <th>Which univeristy do you attend?</th>
		    <td>
		      <form>
			<FormGroup controlId="formControlsSelect">
			  <select value={studentForm.university} onChange={this.handleChange.bind(this, "university")}>
			    <option >{studentForm.university}</option>
			    <option>UCLA</option>
			    <option>USC</option>
			</select>
			</FormGroup>
		      </form>
		    </td>
		  </tr>

		  <tr>
		    <th>What year are you?</th>
		    <td>
		      <form>
			<FormGroup controlId="formControlsSelect">
			  <select value={studentForm.year} onChange={this.handleChange.bind(this, "year")}>
			    <option>{studentForm.year}</option>
			    <option>High School</option>
			    <option>First Year</option>
			    <option>Second Year</option>
			    <option>Third Year</option>
			    <option>Fourth Year</option>
			    <option>Fifth Year or More</option>
			  </select>
			</FormGroup>
		      </form>
		    </td>
		  </tr>

		  <tr>		    
		    <th>What university do you plan to work at?</th>
		    <td>
		      <form>
			<FormGroup controlId="formControlsSelect">
			  <select value={studentForm.university_switch} onChange={this.handleChange.bind(this, "university_switch")}>
			    <option>{studentForm.university_switch}</option>
			    <option>UCLA</option>
			    <option>USC</option>
			</select>
			</FormGroup>
		      </form>
		    </td>
		  </tr>

		  <tr>		    
		    <th>What major are you?</th>
		    <td>
		      <form>
			<FormGroup controlId="formControlsSelect">
			  <select value={studentForm.major} onChange={this.handleChange.bind(this, "major")}>
			  <option>{studentForm.major}</option>
			  <option>Biology/Pre-Med</option>
			  <option>Theatre Technology</option>
			</select>
			</FormGroup>
		      </form>
		    </td>
		  </tr>

		  <tr>		    
		    <th>Resume Upload</th>
		    <td>
		      <form>
			<FormGroup controlId='formControlsFile'>
			  <FormControl type="file" value={studentForm.resume} onChange={this.handleChange.bind(this, "resume")}/>
			  <ControlLabel>{studentForm.resume}</ControlLabel>
			</FormGroup>
		      </form>
		    </td>
		  </tr>

		  <tr>		    
		    <th>Cover Letter Upload</th>
		    <td>
		      <form>
			<FormGroup controlId='formControlsFile'>
			  <FormControl type="file" value={studentForm.cover_letter} onChange={this.handleChange.bind(this, "cover_letter")}/>
			</FormGroup>
		      </form>
		    </td>
		  </tr>
		</tbody>
	      </Table>
	      <Button onClick={this.handleUpdate}>Update</Button>
      	    </div>
      	);
    }
}

export default StudentEditQuestions;
