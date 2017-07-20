import React, { Component } from 'react';
import { Button, Form, FormGroup, FormControl, ControlLabel, Checkbox, Col, Grid, Row, Jumbotron, Radio } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Route,
    Link, Redirect
} from 'react-router-dom';
import axios from "axios";
//import './FormInstance.css';

class Signup extends Component {
   
    constructor(props) {
	super(props);
	this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            studentOrProf: '',
	    fireRedirect: false
	    
	};

	this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
	this.handleLastNameChange = this.handleLastNameChange.bind(this);
	this.handleEmailChange = this.handleEmailChange.bind(this);
	this.handlePasswordChange = this.handlePasswordChange.bind(this);
	this.handleSOrPChange = this.handleSOrPChange.bind(this);
	
	this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleFirstNameChange(event) {
	this.setState({first_name: event.target.value});
    }

    handleLastNameChange(event) {
        this.setState({last_name: event.target.value});
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    handleSOrPChange(event) {
        this.setState({studentOrProf: event.target.value});
    }

    handleSubmit(event) {
	event.preventDefault();
	axios.post('/signup', {
            first_name: this.state.first_name, 
            last_name: this.state.last_name, 
            email: this.state.email, 
            password: this.state.password,
            studentOrProf: this.state.studentOrProf
	}).then(response => {
	    if(response.data === 'ok') {
		this.setState({fireRedirect: true});
		console.log("created new user");
	    } else {
		console.log("could not create new user");
	    }
	}).catch(function (error) {
            console.log(error);
	});
	//alert('A name was submitted: ' + this.state.firstname + " "+ this.state.lastname + " " + this.state.email + " " + this.state.password + " " + this.state.university + " " + this.state.duration + " " + this.state.field);
	
    }

    render() {
	{/*this sets up redirect in component, from current page fireRedirect to root page*/}
	const { from } = this.props.location.state || '/signup';
	const { fireRedirect } = this.state;
	
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
                              <FormControl type='text' placeholder="John" value={this.state.value} onChange={this.handleFirstNameChange}>

                              </FormControl>
			    </FormGroup>
			    
			    <FormGroup controlId='formControlsText'>
                              <ControlLabel>Last Name</ControlLabel>
                              <FormControl type='text' placeholder="Smith" value={this.state.value} onChange={this.handleLastNameChange}>
                              </FormControl>
			    </FormGroup>
			    
			    <FormGroup controlId="formControlsSelect">
                              <ControlLabel>Email</ControlLabel>
                              <FormControl  type='email' placeholder="johnsmith@gmail.com" value={this.state.value} onChange={this.handleEmailChange}>
                              </FormControl>
			    </FormGroup>
			    
			    <FormGroup controlId="formControlsSelect">
                              <ControlLabel>Password</ControlLabel>
                              <FormControl  type='password' value={this.state.value} onChange={this.handlePasswordChange}>
                              </FormControl>
			    </FormGroup>

			    <FormGroup controlId="formControlsSelect">
                              <ControlLabel>Are you a student or professor?</ControlLabel>
                              <br/>
                              <select value={this.state.value} onChange={this.handleSOrPChange}>
				<option value="select">Select</option>
				<option value="Student">Student</option>
				<option value="Professor">Professor</option>
                              </select>
			      

			    </FormGroup>
			    
			    <br/>
			    
			    <Button type="submit">Submit</Button>
			  </form>
			  {fireRedirect && (<Redirect to={from || '/'}/>)}
			</Col>
                      </Row>

		    </Jumbotron>

  		  </Col>
  		  <Col xs={2}></Col>
  		</Row>
	      </Grid>

            </div>

        );

    }

    
}


export default Signup;
