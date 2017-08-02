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

class ProfessorEditQuestions extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    profForm: {
		gpa: '',
		interest: '',
		location: '',
		achieve: '',
		duration: '',
		career: '',
		commitment: '',
		university: '',
		duration: '',
		field: '',
		cv: '',
		uuid: this.props.uuid
	    }
	};

	this.handleChange = this.handleChange.bind(this);
	this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleChange(property, e) {	
	const profForm = this.state.profForm;
	profForm[property] = e.target.value;
	this.setState({ profForm: profForm});
    }

    handleUpdate(event) {
	event.preventDefault();
    	axios.put('/api/updateprofessorform', {
            profForm: this.state.profForm
	}).then(response => {
	    if(response.data === "ok") {
	    }
	}).catch(function (error) {
            console.log(error);
	});
    }

    componentWillMount() {
	axios.get("/api/professorform", {
	}).then(response => {
	    this.setState({
		profForm: {
		    gpa: response.data.min_gpa,
		    interest: response.data.research_interest,
		    location: response.data.location,
		    achieve: response.data.student_achieve,
		    long_dist: response.data.long_distance,
		    career: response.data.career,
		    commitment: response.data.hours_week,
		    university: response.data.university,
		    available: response.data.available,
		    duration: response.data.duration,
		    field: response.data.field,
		    cv: response.data.cv,
		    uuid: response.data.uuid
		}
	    });
	}).catch(function (error) {
	    console.log(error);
	});
    }
    
    render() {
	const profForm = this.state.profForm;
	
      	return(

      	    <div>
	      <Table striped bordered condensed hover>
		<tbody>
		  <tr>
		    <th>What is the minium GPA you are look for?</th>
		    <td>
		      <form>
			<FormGroup>
			  <FormControl type="text" value={profForm.gpa} onChange={this.handleChange.bind(this, "gpa")}/>
			</FormGroup>
		      </form>
		    </td>
		  </tr>

		  <tr>  
		    <th>Research Interests</th>
		    <td>
		      <form>
			<FormGroup>
			  <FormControl type="text" value={profForm.interest} onChange={this.handleChange.bind(this, "interest")}/>
			</FormGroup>
		      </form>
		    </td>
		  </tr>

		  <tr>
		    <th>Where do you live?</th>
		    <td>
		      <form>
			<FormGroup>
			  <FormControl type="text" value={profForm.location} onChange={this.handleChange.bind(this, "location")}/>
			</FormGroup>
		      </form>
		    </td>
		  </tr>

		  <tr>
		    <th>What do you want your students to achieve?</th>
		    <td>
		      <form>
			<FormGroup>
			  <FormControl type="text" value={profForm.achieve} onChange={this.handleChange.bind(this, "achieve")}/>
			</FormGroup>
		      </form>
		    </td>
		  </tr>

		  <tr>
		    <th>How long are you will to work long distance?</th>
		    <td>
		      <form>
			<FormGroup>
			  <FormControl type="text" value={profForm.long_dist} onChange={this.handleChange.bind(this, "long_dist")}/>
			</FormGroup>
		      </form>
		    </td>
		  </tr>
		  
		  <tr>
		    <th>What are you looking for in a student?</th>
		    <td>
		      <form>
			<FormGroup>
			  <FormControl type="text" value={profForm.career} onChange={this.handleChange.bind(this, "career")}/>
			</FormGroup>
		      </form>
		    </td>
		  </tr>

		  <tr>
		    <th>How many hours per week can you commit to doing research?</th>
		    <td>
		      <form>
			<FormGroup>
			  <FormControl type="text" value={profForm.commitment} onChange={this.handleChange.bind(this, "commitment")}/>
			</FormGroup>
		      </form>
		    </td>
		  </tr>
		  
		  <tr>
		    <th>Do you have any openings in you research department?</th>
		    <td>
		      <form>
			<FormGroup controlId="formControlsSelect">
			  <select value={profForm.available} onChange={this.handleChange.bind(this, "available")}>
			    <option>{profForm.available}</option>
			    <option>Yes</option>
			    <option>No</option>
			  </select>
			</FormGroup>
		      </form>
		    </td>
		  </tr>

		  <tr>
		    <th>Which univeristy are you affiliated with?</th>
		    <td>
		      <form>
			<FormGroup controlId="formControlsSelect">
                          <select value={profForm.university} onChange={this.handleChange.bind(this, "university")}>
                            <option>{profForm.university}</option>
                            <option>UCLA</option>
                            <option>USC</option>
                          </select>                        
			</FormGroup>
		      </form>
		    </td>
		  </tr>

		  <tr>
		    <th>How long have you been doing research in this discipline?</th>
		    <td>
		      <form>
			<FormGroup>
			  <FormControl type='text' value={profForm.duration} onChange={this.handleChange.bind(this, "duration")}/>
			</FormGroup>
		      </form>
		    </td>
		  </tr>

		  <tr>
		    <th>What field do you work in?</th>
		    <td>
		      <form>
			<FormGroup controlId="formControlsSelect">
			  <select value={profForm.field} onChange={this.handleChange.bind(this, "field")}>
                            <option>{profForm.field}</option>
                            <option>Medical/Pre-med</option>
                            <option>Theatre</option>
                          </select>
			</FormGroup>
		      </form>
		    </td>
		  </tr>

		  <tr>		    
		    <th>CV Upload</th>
		    <td>
		      <form>
			<FormGroup controlId='formControlsFile'>
			  <FormControl type="file" value={profForm.resume} onChange={this.handleChange.bind(this, "cv")}/>
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


export default ProfessorEditQuestions;
