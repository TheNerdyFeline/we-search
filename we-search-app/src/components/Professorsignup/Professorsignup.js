import React, { Component } from 'react';
import { Button, Form, FormGroup, FormControl, ControlLabel, Checkbox, Col, Grid, Row, Jumbotron, Radio } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import axios from "axios";
//import FormInstanceCss from './FormInstance.css'


export default class Professorsignup extends Component {

      constructor(props) {
      super(props);
      this.state = {

        firstname: '',
        lastname: '',
        email: '',
        password: '',
        university: '',
        duration: '',
        field: '',
        commitment: ''
    }

      this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
      this.handleLastNameChange = this.handleLastNameChange.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleUniversityChange = this.handleUniversityChange.bind(this);
      this.handleDurationChange = this.handleDurationChange.bind(this);
      this.handleFieldChange = this.handleFieldChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFirstNameChange(event) {
      this.setState({firstname: event.target.value});
    }

    handleLastNameChange(event) {
      this.setState({lastname: event.target.value});
    }

    handleEmailChange(event) {
      this.setState({email: event.target.value});
    }

    handlePasswordChange(event) {
      this.setState({password: event.target.value});
    }

    handleUniversityChange(event) {
      this.setState({university: event.target.value});
    }

    handleDurationChange(event) {
      this.setState({duration: event.target.value});
    }

    handleFieldChange(event) {
      this.setState({field: event.target.value});
    }

    handleSubmit(event) {
      axios.post('/api/professorsignup', {
        first_name: this.state.firstname, 
        last_name: this.state.lastname, 
        email: this.state.email, 
        password: this.state.password, 
        university: this.state.university, 
        duration: this.state.duration, 
        field: this.state.field
      }).then(response => {
        console.log(response.data);

      }).catch(function (error) {
          console.log(error);
      });
      //alert('A name was submitted: ' + this.state.firstname + " "+ this.state.lastname + " " + this.state.email + " " + this.state.password + " " + this.state.university + " " + this.state.duration + " " + this.state.field);
      event.preventDefault();
    }
      
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
                      <FormControl type='text' placeholder="John" value={this.state.value} onChange={this.handleFirstNameChange}/>

                     
                    </FormGroup>
                      
                      <FormGroup controlId='formControlsText'>
                        <ControlLabel>Last Name</ControlLabel>
                        <FormControl type='text' placeholder="Smith" value={this.state.value} onChange={this.handleLastNameChange}/>
                        
                      </FormGroup>
                      
                      <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl  type='email' placeholder="johnsmith@gmail.com" value={this.state.value} onChange={this.handleEmailChange}/>
                        
                      </FormGroup>
                  
                      <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl  type='password' value={this.state.value} onChange={this.handlePasswordChange}/>
                        
                      </FormGroup>
                      
                      <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Which univeristy are you affiliated with?</ControlLabel>
                          <br/>
                          <select value={this.state.value} onChange={this.handleUniversityChange}>
                            <option value="select">Select</option>
                            <option value="UCLA">UCLA</option>
                            <option value="USC">USC</option>
                          </select>
                        
                      </FormGroup>
                      
                      <FormGroup controlId="formControlsSelect">
                        <ControlLabel>How long have you been doing research in this discipline?</ControlLabel>
                           <FormControl type='number' placeholder="0" value={this.state.value} onChange={this.handleDurationChange}/>
                          
                      </FormGroup>

                      <FormGroup controlId="formControlsSelect">
                        <ControlLabel>What field do you work in?</ControlLabel>
                        <br/>
                          <select value={this.state.value} onChange={this.handleFieldChange}>
                            <option value="select">Select</option>
                            <option value="Medical">Medical/Pre-med</option>
                            <option value="Theatre">Theatre</option>
                          </select>
                      

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

        
  };
