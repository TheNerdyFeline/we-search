import React, { Component } from 'react';
import { Button, ButtonGroup, Form, FormGroup, FieldGroup, FormControl, ControlLabel, Checkbox, Col, Grid, Row, Jumbotron, Panel, PageHeader, Radio, Table } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class ProfessorEditQuestions extends Component {
      
    render() {

      	return(

      		<div>

      			<Grid>
		        	<Row>
			        	<Col xs={1}></Col>
			        	<Col xs={10}>
				        	
          				<Panel header={title2} bsStyle="info">
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
							      
							    </tbody>
							  </Table>

							  <Button>Update</Button>
    					</Panel>
				  		</Col>
				  		<Col xs={1}></Col>
			  		</Row>
		  		</Grid>


      		</div>
      	)
  	}
}


export default ProfessorEditQuestions;