import React, { Component } from 'react';
import { Button, ButtonGroup, Form, FormGroup, FieldGroup, FormControl, ControlLabel, Checkbox, Col, Grid, Row, Jumbotron, Panel, PageHeader, Radio, Table } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import ProfessorEditQuestions from './EditQuestions/ProfessorEditQuestions';
import StudentEditQuestions from './EditQuestions/StudentEditQuestions';

import axios from "axios";

const title1 = (
    <h3>Best Matches</h3>
);

const title2 = (
    <h3>Edit Personal Info</h3>
);


const title4 = (
    <h3>Edit Question Answers</h3>
);

class Dashboard extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    first_name: this.props.location.state3,
	    last_name: this.props.location.state4,
	    email: this.props.location.state5,
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
	    fireRedirect: 0,
	    uuid: this.props.location.state1,
	    studProf: this.props.location.state2
	};
    }


    
    render() {
	const studProf = this.state.studProf;
        return (
	    
	    <div>
	      
	      <Grid>
        	<Row>
        	  <Col xs={1}></Col>
        	  <Col xs={10}>
		    <Jumbotron className="jumbotron">
		      <h2 className="text-center">Dashboard</h2>
		      
		    </Jumbotron>
	  	  </Col>
	  	  <Col xs={1}></Col>
	  	</Row>
          	<Row>
          	  <Col xs={1}></Col>
          	  <Col className='text-center' xs={10}>
          	    
          	    <Panel header={title1} bsStyle="info">
     		      <Button>Find Best Matches</Button>
    		    </Panel>
          	    
		  </Col>
          	  <Col xs={1}></Col>
          	</Row>
          	<Row>
          	  <Col xs={1}></Col>
          	  <Col className='text-center' xs={10}>
		    
          	    <Panel header={title2} bsStyle="info">
     		      <Table striped bordered condensed hover>
			<tbody>
			  <tr>
			    
			    <th>First Name:</th>
			    <td>
			      <form>
				<FormGroup>
      				  <FormControl type="text" defaultValue={this.state.first_name}/>
    				</FormGroup>
    			      </form>
			    </td>

			  </tr>
			  
			  
			  <tr>
			    
			    <th>Last Name:</th>
			    <td>
			      <form>
				<FormGroup>
      				  <FormControl type="text" defaultValue={this.state.last_name}/>
    				</FormGroup>
    			      </form>
			    </td>

			  </tr>

			  <tr>
			    
			    <th>Email:</th>
			    <td>
			      <form>
				<FormGroup>
      				  <FormControl type="text" defaultValue={this.state.email}/>
    				</FormGroup>
    			      </form>
			    </td>

			  </tr>
			  
			</tbody>
		      </Table>

		      <Button>Update</Button>
    		    </Panel>
          	    
		  </Col>
  		  <Col xs={1}></Col>
  		</Row>
  		<Row>
          	  <Col xs={1}></Col>
		  
          	  <Col className='text-center' xs={10}>
		    
          	    <Panel header={title4} bsStyle="info">
     		      {/* insert correct component here based on state */}
		      {studProf === "Student" ? (
			  <StudentEditQuestions />
		      ) : (<ProfessorEditQuestions />
			  )}
    		    </Panel>
          	    
		  </Col>
  		  <Col xs={1}></Col>
  		</Row>
	      </Grid>

	    </div>

        );

    }

    
    
}


export default Dashboard;
