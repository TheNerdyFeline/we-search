import React, { Component } from 'react';
import FormInstance from './FormInstance';
import Mission from '../Mission/Mission';
import PubCounter from '../PubCounter/PubCounter';

export default class Login extends Component {
	render() {
		return (
			<div>
				<FormInstance />
				<Mission />
				<PubCounter />
			</div>
		)
	}	
};