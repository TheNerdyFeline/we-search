import React, { Component } from 'react';
import { Button, Form, FormGroup, FieldGroup, FormControl, ControlLabel, Checkbox, Col, Grid, Row, Jumbotron, Panel, PageHeader} from 'react-bootstrap';

export default class Questions extends Component {
	render() {
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
						<form>
							<FormGroup controlId='formControlsText'>
							    <ControlLabel>Name</ControlLabel>
							    <FormControl type='text' placeholder="Enter Full Name"/>
						    </FormGroup>
						    <FormGroup controlId='formControlsText'>
							    <ControlLabel>GPA</ControlLabel>
							    <FormControl type='text' placeholder="Enter GPA ( Ex: 3.54 )"/>
						    </FormGroup>
							<FormGroup controlId='formControlsFile'>
	  							<ControlLabel>Resume Upload</ControlLabel>
	  							<FormControl type='file' />
   							 </FormGroup>
						    <FormGroup controlId="formControlsSelect">
      							<ControlLabel>Question 1</ControlLabel>
							      <FormControl componentClass="select" placeholder="select">
							        <option value="select">select</option>
							        <option value="select">select 1</option>
							        <option value="select">select 2</option>
							        <option value="select">select 3</option>
							        <option value="other">...</option>
							      </FormControl>
						    </FormGroup>
						    <FormGroup controlId="formControlsSelect">
      							<ControlLabel>Question 2</ControlLabel>
							      <FormControl componentClass="select" placeholder="select">
							        <option value="select">select</option>
							        <option value="other">...</option>
							      </FormControl>
						    </FormGroup>
						    <FormGroup controlId="formControlsSelect">
      							<ControlLabel>Question 3</ControlLabel>
							      <FormControl componentClass="select" placeholder="select">
							        <option value="select">select</option>
							        <option value="other">...</option>
							      </FormControl>
						    </FormGroup>
						    <FormGroup controlId="formControlsSelect">
      							<ControlLabel>Question 4</ControlLabel>
							      <FormControl componentClass="select" placeholder="select">
							        <option value="select">select</option>
							        <option value="other">...</option>
							      </FormControl>
						    </FormGroup>
						    <FormGroup controlId="formControlsSelect">
      							<ControlLabel>Question 5</ControlLabel>
							      <FormControl componentClass="select" placeholder="select">
							        <option value="select">select</option>
							        <option value="other">...</option>
							      </FormControl>
						    </FormGroup>
						    <FormGroup controlId="formControlsSelect">
      							<ControlLabel>Question 6</ControlLabel>
							      <FormControl componentClass="select" placeholder="select">
							        <option value="select">select</option>
							        <option value="other">...</option>
							      </FormControl>
						    </FormGroup>
						    <FormGroup controlId="formControlsSelect">
      							<ControlLabel>Question 7</ControlLabel>
							      <FormControl componentClass="select" placeholder="select">
							        <option value="select">select</option>
							        <option value="other">...</option>
							      </FormControl>
						    </FormGroup>
						    <FormGroup controlId="formControlsSelect">
      							<ControlLabel>Question 8</ControlLabel>
							      <FormControl componentClass="select" placeholder="select">
							        <option value="select">select</option>
							        <option value="other">...</option>
							      </FormControl>
						    </FormGroup>
						    <FormGroup controlId="formControlsSelect">
      							<ControlLabel>Question 9</ControlLabel>
							      <FormControl componentClass="select" placeholder="select">
							        <option value="select">select</option>
							        <option value="other">...</option>
							      </FormControl>
						    </FormGroup>
						    <FormGroup controlId="formControlsSelect">
      							<ControlLabel>Question 10</ControlLabel>
							      <FormControl componentClass="select" placeholder="select">
							        <option value="select">select</option>
							        <option value="other">...</option>
							      </FormControl>
						    </FormGroup>
						    <Button type="submit">
						      Submit
						    </Button>
					    </form>
					    </Col>
					</Row>


				</Grid>
			</div>
		)
	}
}