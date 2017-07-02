import React, { Component } from 'react';
import FormInstance from './FormInstance';
import Mission from '../Mission/Mission';

export default class Login extends Component {
	render() {
		return (
			<div>
				<FormInstance />
				<Mission />
			</div>
		)
	}	
};