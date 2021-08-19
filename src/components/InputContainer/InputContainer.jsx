import React, { Component } from 'react';
import ArrowButton from '../ArrowButton/ArrowButton.jsx';
import Input from '../Input/Input.jsx';

import './InputContainer.scss';

export default class InputContainer extends Component {
	render() {
		return (
			<div className="inputContainer">
				<ArrowButton visible={this.props.visible} />
				<Input />
			</div>
		);
	}
}
