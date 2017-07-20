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

class StudentEditQuestions extends Component {
      
    render() {

      	return(

      		<div>

      		
	        	
					 <Table striped bordered condensed hover>
				    <tbody>
				      <tr>
				        
				        <th>GPA?</th>
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
				        
				        <th>Are you willing to move?</th>
				        <td>
				        	<form>
				        		<FormGroup>
										<FormControl type="text" />
								</FormGroup>
							</form>
				        </td>

				      </tr>

				      <tr>
				        
				        <th>What do you want to Achieve?</th>
				        <td>
				        	<form>
				        		<FormGroup>
										<FormControl type="text" />
								</FormGroup>
							</form>
				        </td>

				      </tr>

				      <tr>
				        
				        <th>How long are you planning to stay where you are?</th>
				        <td>
				        	<form>
				        		<FormGroup>
										<FormControl type="text" />
								</FormGroup>
							</form>
				        </td>

				      </tr>

				       <tr>
				        
				        <th>What is your career aspirtation?</th>
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
				        
				        <th>Which univeristy do you attend?</th>
				        <td>
				        	<form>
				        		<FormGroup>
										<FormControl type="text" />
								</FormGroup>
							</form>
				        </td>

				      </tr>

				      <tr>
				        
				        <th>What year are you?</th>
				        <td>
				        	<form>
				        		<FormGroup>
										<FormControl type="text" />
								</FormGroup>
							</form>
				        </td>

				      </tr>

				      <tr>
				        
				        <th>What university do you plan to work at?</th>
				        <td>
				        	<form>
				        		<FormGroup>
										<FormControl type="text" />
								</FormGroup>
							</form>
				        </td>

				      </tr>

				      <tr>
				        
				        <th>What major are you?</th>
				        <td>
				        	<form>
				        		<FormGroup>
										<FormControl type="text" />
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
      	)
  	}
}


export default StudentEditQuestions;