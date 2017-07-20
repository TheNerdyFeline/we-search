import React, { Component } from 'react';
import { Button, ButtonGroup, Form, FormGroup, FieldGroup, FormControl, ControlLabel, Checkbox, Col, Grid, Row, Jumbotron, Panel, PageHeader, Radio } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import axios from 'axios';
//import FormInstanceCss from './FormInstance.css'

class FormInstance extends Component {
    constructor(props) {
	super(props);
	this.state = {
            email: '',
            password: '',
	    isAuthenticated: false
	};

	this.handleSetEmailChange = this.handleSetEmailChange.bind(this);
	this.handleSetPasswordChange = this.handleSetPasswordChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSetEmailChange(event) {
	this.setState({email: event.target.value});
    }

    handleSetPasswordChange(event) {
	this.setState({password: event.target.value});
    }

    handleSubmit(event) {
	event.preventDefault();
  	axios.post('/login', { 
            email: this.state.email, 
            password: this.state.password
      	}).then(response => {
	    this.setState({isAuthenticated: true});
            console.log(response);
      	}).catch(function (error) {
            console.log(error);
            console.log("login error");
	});
    }
    
    render() {

        return (
            
	    <div>

	      <Grid>
          	<Row>
          	  <Col xs={2}></Col>
          	  <Col xs={8}>

          	    <Jumbotron className="jumbotron">
          	      <h2 className="text-center welcome">Welcome to <span className='we-search'>We-Search</span></h2>
		      <Form horizontal>
			<FormGroup controlId="formHorizontalEmail">
			  <Col className="labels" componentClass={ControlLabel} sm={2}>
			    Email
			  </Col>
			  <Col sm={10}>
			    <FormControl type="email" placeholder="Email" value={this.state.value} onChange={this.handleSetEmailChange} />
			  </Col>
			</FormGroup>

			<FormGroup controlId="formHorizontalPassword">
			  <Col className="labels" componentClass={ControlLabel} sm={2}>
			    Password
			  </Col>
			  <Col sm={10}>
			    <FormControl type="password" placeholder="Password" value={this.state.value} onChange={this.handleSetPasswordChange} />
			  </Col>
			</FormGroup>

			<FormGroup>
			  <Col smOffset={2} sm={10}>
			    <Checkbox className="labels">Remember me</Checkbox>
			  </Col>
			</FormGroup>

			<FormGroup>
			  <Col smOffset={2} sm={10}>
			    <Button type="submit" onClick={this.handleSubmit}>Sign in
			      {/*<Link to='/profquestions'>Sign in</Link>*/}
			    </Button>
			  </Col>
			  <Col smOffset={2} sm={10}>
			    <h5 className='account'>Don't have an account already?</h5>
			  </Col>
			  <Col smOffset={2} sm={10}>
			    <Button type="submit">
			      <Link to='/signup'>Create Account</Link>
			    </Button>
			  </Col>
			</FormGroup>
		      </Form>
	  	    </Jumbotron>

  		  </Col>
  		  <Col xs={2}></Col>
  		</Row>
	      </Grid>

            </div>

          );

      }

        
      
  }


export default FormInstance;

