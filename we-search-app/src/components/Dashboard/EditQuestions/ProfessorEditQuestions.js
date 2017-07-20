import React, { Component } from 'react';
import { Button, ButtonGroup, Form, FormGroup, FieldGroup, FormControl, ControlLabel, Checkbox, Col, Grid, Row, Jumbotron, Panel, PageHeader, Radio, Table } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const title2 = (
  <h3>Edit Question Answers</h3>
);

class ProfessorEditQuestions extends Component {
      
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
										<FormControl type="text" />
								</FormGroup>
							</form>
						</td>

				      </tr>
				    
				    
				      <tr>
				        
				        <th>Research Interests</th>
				        <td>
				        	<form>
				        		<FormGroup>
										<FormControl type="text" />
								</FormGroup>
							</form>
				        </td>

				      </tr>

				      <tr>
				        
				        <th>Where do you live?</th>
				        <td>
				        	<form>
				        		<FormGroup>
										<FormControl type="text" />
								</FormGroup>
							</form>
				        </td>

				      </tr>

				      <tr>
				        
				        <th>What do you want your students to achieve?</th>
				        <td>
				        	<form>
				        		<FormGroup>
										<FormControl type="text" />
								</FormGroup>
							</form>
				        </td>

				      </tr>

				      <tr>
				        
				        <th>How long are you will to work long distance?</th>
				        <td>
				        	<form>
				        		<FormGroup>
										<FormControl type="text" />
								</FormGroup>
							</form>
				        </td>

				      </tr>

				      <tr>
				        
				        <th>What are you looking for in a student?</th>
				        <td>
				        	<form>
				        		<FormGroup>
										<FormControl type="text" />
								</FormGroup>
							</form>
				        </td>

				      </tr>

				       <tr>
				        
				        <th>How many hours per week can you commit to doing research?</th>
				        <td>
				        	<form>
				        		<FormGroup>
										<FormControl type="text" />
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
      	)
  	}
}


export default ProfessorEditQuestions;