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
	    uuid: ''
	};
    }
    
    componentWillMount() {
	console.log("user", this.user);
	console.log(this.props);
	axios.get("/api/studentform", {
	}).then(response => {
	    console.log(response);
	    this.setState({
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
		cover_letter: response.data.cover_letter
	    });
	    console.log("got student form");
	    console.log(this.state);	    
	    this.forceUpdate(function(){
		console.log('re-render');
	    });
	}).catch(function (error) {
	    console.log(error);
	});
    }

    componentDidUpdate(prevProps, prevState){
	if (prevState != this.state){
	    console.log('state has changed, inside Update');
	}
    }
    
    render() {
	console.log('RENDERING AGAIN');
      	return(

      	    <div>
	      <Table striped bordered condensed hover>
		<tbody>
		  <tr>		    
		    <th>GPA?</th>
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
		    
		    <th>Are you willing to move?</th>
		    <td>
		      <form>
			<FormGroup>
			  <FormControl type="text" value={this.state.willingMover}/>
			</FormGroup>
		      </form>
		    </td>

		  </tr>

		  <tr>
		    
		    <th>What do you want to Achieve?</th>
		    <td>
		      <form>
			<FormGroup>
			  <FormControl type="text" value={this.state.achieve}/>
			</FormGroup>
		      </form>
		    </td>

		  </tr>

		  <tr>
		    
		    <th>How long are you planning to stay where you are?</th>
		    <td>
		      <form>
			<FormGroup>
			  <FormControl type="text" value={this.state.duration}/>
			</FormGroup>
		      </form>
		    </td>

		  </tr>

		  <tr>
		    
		    <th>What is your career aspirtation?</th>
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
		    
		    <th>Which univeristy do you attend?</th>
		    <td>
		      <form>
			<FormGroup>
			  <FormControl type="text" value={this.state.university}/>
			</FormGroup>
		      </form>
		    </td>

		  </tr>

		  <tr>
		    
		    <th>What year are you?</th>
		    <td>
		      <form>
			<FormGroup>
			  <FormControl type="text" value={this.state.year}/>
			</FormGroup>
		      </form>
		    </td>

		  </tr>

		  <tr>
		    
		    <th>What university do you plan to work at?</th>
		    <td>
		      <form>
			<FormGroup>
			  <FormControl type="text" value={this.state.university_switch}/>
			</FormGroup>
		      </form>
		    </td>

		  </tr>

		  <tr>
		    
		    <th>What major are you?</th>
		    <td>
		      <form>
			<FormGroup>
			  <FormControl type="text" value={this.state.major}/>
			</FormGroup>
		      </form>
		    </td>

		  </tr>

		  <tr>
		    
		    <th>Resume Upload</th>
		    <td>
		      <form>
			<FormGroup>
			  <FormControl type="file" />
			</FormGroup>
		      </form>
		    </td>

		  </tr>

		  <tr>
		    
		    <th>Cover Letter Upload</th>
		    <td>
		      <form>
			<FormGroup>
			  <FormControl type="file" />
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


export default StudentEditQuestions;
