import React, { Component } from 'react';
import { Button, Form, FormGroup, FormControl, ControlLabel, Checkbox, Col, Grid, Row, Jumbotron, Radio } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
//import FormInstanceCss from './FormInstance.css'

class Studentsignup extends Component {
      
      render() {

        return (
         
        <div>

        <Grid>
          	<Row>
          		<Col xs={2}></Col>
          		<Col xs={8}>

          		<Jumbotron className="jumbotron">
          		  <h2 className="text-center">Student Sign Up</h2>
		           
	  			    </Jumbotron>

              <Jumbotron className='jumbotron'>
      
                <Row>
                  <Col lg={12}>
                    <form onSubmit={this.handleSubmit}>
                      <FormGroup controlId='formControlsText'>
                        <ControlLabel>First Name</ControlLabel>
                        <FormControl type='text' placeholder="John">

                        </FormControl>
                      </FormGroup>
                      
                      <FormGroup controlId='formControlsText'>
                        <ControlLabel>Last Name</ControlLabel>
                        <FormControl type='text' placeholder="Smith">
                        </FormControl>
                      </FormGroup>
                      
                      <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl  type='email' placeholder="johnsmith@gmail.com">
                        </FormControl>
                      </FormGroup>
                  
                      <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl  type='password'>
                        </FormControl>
                      </FormGroup>
                      
                      <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Which univeristy do you attend?</ControlLabel>
                          <FormControl componentClass="select" placeholder="Select">
                          <option value="select">Select</option>
                          <option value="select">UCLA</option>
                          <option value="select">USC</option>
                        </FormControl>
                      </FormGroup>
                      
                      <FormGroup controlId="formControlsSelect">
                        <ControlLabel>What year are you?</ControlLabel>
                          <FormControl componentClass="select" placeholder="Select">
                          <option value="select">Select</option>
                          <option value="select">High School</option>
                          <option value="select">First Year</option>
                          <option value="select">Second Year</option>
                          <option value="select">Third Year</option>
                          <option value="select">Fourth Year</option>
                          <option value="select">Fifth Year or More</option>
                        </FormControl>
                      </FormGroup>

                      <FormGroup controlId="formControlsSelect">
                        <ControlLabel>What university do you plan to work at?</ControlLabel>
                          <FormControl componentClass="select" placeholder="Select">
                          <option value="select">Select</option>
                          <option value="select">UCLA</option>
                          <option value="select">USC</option>
                        </FormControl>
                      </FormGroup>

                      <FormGroup controlId="formControlsSelect">
                        <ControlLabel>What major are you?</ControlLabel>
                          <FormControl componentClass="select" placeholder="Select">
                          <option value="select">Select</option>
                          <option value="select">Biology/Pre-med</option>
                          <option value="select">Theatre Technology</option>
                        </FormControl>
                      </FormGroup>
                      
                      <br/>
                      
                      <Button type="submit">
                        Submit
                      </Button>
                    </form>
                  </Col>
                </Row>

              </Jumbotron>

  				</Col>
  				<Col xs={2}></Col>
  			</Row>
		</Grid>

        </div>

          )

      }

        
  }


export default Studentsignup;