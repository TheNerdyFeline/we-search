import React, { Component } from 'react';
import { Button, Form, FormGroup, FormControl, ControlLabel, Checkbox, Col, Grid, Row, Jumbotron } from 'react-bootstrap';
import FormInstanceCss from './FormInstance.css'

class FormInstance extends Component {
      
      render() {

        return (
         
        <div>

        <Grid>
          	<Row>
          		<Col xs={2}></Col>
          		<Col xs={8}>

          		<Jumbotron className="jumbotron">
          		<h2 className="text-center welcome">Welcome to WeSearch</h2>
		            <Form horizontal>
					    <FormGroup controlId="formHorizontalEmail">
					      <Col className="labels" componentClass={ControlLabel} sm={2}>
					        Email
					      </Col>
					      <Col sm={10}>
					        <FormControl type="email" placeholder="Email" />
					      </Col>
					    </FormGroup>

					    <FormGroup controlId="formHorizontalPassword">
					      <Col className="labels" componentClass={ControlLabel} sm={2}>
					        Password
					      </Col>
					      <Col sm={10}>
					        <FormControl type="password" placeholder="Password" />
					      </Col>
					    </FormGroup>

					    <FormGroup>
					      <Col smOffset={2} sm={10}>
					        <Checkbox className="labels">Remember me</Checkbox>
					      </Col>
					    </FormGroup>

					    <FormGroup>
					      <Col smOffset={2} sm={10}>
					        <Button type="submit">
					          Sign in
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

          )

      }

        
      
  }


export default FormInstance;

