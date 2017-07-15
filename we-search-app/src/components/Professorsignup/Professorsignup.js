import React, { Component } from 'react';
import { Button, Form, FormGroup, FormControl, ControlLabel, Checkbox, Col, Grid, Row, Jumbotron, Radio } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
//import FormInstanceCss from './FormInstance.css'

class Professorsignup extends Component {
      
      render() {

        return (
         
        <div>

        <Grid>
          	<Row>
          		<Col xs={2}></Col>
          		<Col xs={8}>

          		<Jumbotron className="jumbotron">
          		  <h2 className="text-center">Professor Sign Up</h2>
		           
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
                        <ControlLabel>Which univeristy are you affiliated with?</ControlLabel>
                          <FormControl componentClass="select" placeholder="Select">
                          <option value="select">Select</option>
                          <option value="select">UCLA</option>
                          <option value="select">USC</option>
                        </FormControl>
                      </FormGroup>
                      
                      <FormGroup controlId="formControlsSelect">
                        <ControlLabel>How long have you been doing research in this discipline?</ControlLabel>
                           <FormControl type='number' placeholder="0">
                           </FormControl>
                      </FormGroup>

                      <FormGroup controlId="formControlsSelect">
                        <ControlLabel>What field do you work in?</ControlLabel>
                          <FormControl componentClass="select" placeholder="Select">
                          <option value="select">Select</option>
                          <option value="select">Medical/Pre-med</option>
                          <option value="select">Theatre</option>
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


export default Professorsignup;