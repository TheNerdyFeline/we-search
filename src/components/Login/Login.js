import React, { Component } from 'react';

// import children components
import NavbarComponent from '../Nav/NavbarComponent';
import FormInstance from './FormInstance';
import Mission from '../Mission/Mission';
import PubCounter from '../PubCounter/PubCounter';

export default class Login extends Component {
	render() {
		return (
			<div>
			  <NavbarComponent/>
			  <FormInstance />
			  <Mission />
			  <PubCounter />
			</div>
		);
	}	
};
