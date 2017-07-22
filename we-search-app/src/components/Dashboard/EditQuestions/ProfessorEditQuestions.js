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
	    cv: ''
	};
    }

    componentWillMount() {
	console.log("getting form");
	 axios.get("/api/professorform", {
	 }).then(response => {
	     console.log(response);
		this.setState({
		    gpa: response.data.min_gpa,
		    interest: response.data.research_interest,
		    location: response.data.location,
		    achieve: response.data.student_achieve,
		    duration: response.data.long_distance,
		    career: response.data.career,
		    commitment: response.data.hours_week,
		    university: response.data.university,
		    available: response.data.available,
		    duration: response.data.duration,
		    field: response.data.field,
		    cv: response.data.cv
		});
	    }).catch(function (error) {
		console.log(error);
	    });
    }
    
    render() {

      	return(

      	    <div>
	      <Table striped bordered condensed hover>
		<tbody>
		  <tr>
		    
		    <th>What is the minium GPA you are look for?</th>
		    <td>
		      <form>
			<FormGroup>
			  <FormControl type="text" value={this.state.gpa}/>
			</FormGroup>
		      </form>
		    </td>

		  </tr>

		  <tr>  
		    <th>Research Interests</th>
		    <td>
		      <form>
			<FormGroup>
			  <FormControl type="text" value={this.state.interest}/>
			</FormGroup>
		      </form>
		    </td>

		  </tr>

		  <tr>
		    
		    <th>Where do you live?</th>
		    <td>
		      <form>
			<FormGroup>
			  <FormControl type="text" value={this.state.location}/>
			</FormGroup>
		      </form>
		    </td>

		  </tr>

		  <tr>
		    
		    <th>What do you want your students to achieve?</th>
		    <td>
		      <form>
			<FormGroup>
			  <FormControl type="text" value={this.state.achieve}/>
			</FormGroup>
		      </form>
		    </td>

		  </tr>

		  <tr>
		    
		    <th>How long are you will to work long distance?</th>
		    <td>
		      <form>
			<FormGroup>
			  <FormControl type="text" value={this.state.duration}/>
			</FormGroup>
		      </form>
		    </td>

		  </tr>

		  <tr>
		    
		    <th>What are you looking for in a student?</th>
		    <td>
		      <form>
			<FormGroup>
			  <FormControl type="text" value={this.state.career}/>
			</FormGroup>
		      </form>
		    </td>

		  </tr>

		  <tr>
		    
		    <th>How many hours per week can you commit to doing research?</th>
		    <td>
		      <form>
			<FormGroup>
			  <FormControl type="text" value={this.state.commitment}/>
			</FormGroup>
		      </form>
		    </td>

		  </tr>

		  <tr>
		    
		    <th>Do you have any openings in you research department?</th>
		    <td>
		      <form>
			<FormGroup>
			  <FormControl type="text" />
			</FormGroup>
		      </form>
		    </td>

		  </tr>
		  
		</tbody>
	      </Table>

	      <Button>Update</Button>
	      



      	    </div>
      	);
    }
}


export default ProfessorEditQuestions;
