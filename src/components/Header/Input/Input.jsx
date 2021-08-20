import React, { Component } from 'react';
import './Input.scss';

class Input extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
	}
	handleChange(e) {
		this.props.onInputChange(e);
	}
	handleKeyDown(e) {
		if (e.key === 'Enter') {
			this.props.onKeyDown(e);
			e.target.value = '';
		}
	}
	render() {
		return (
			<input
				className="input"
				value={this.props.value}
				onChange={this.handleChange}
				placeholder="What needs to be done?"
				onKeyDown={this.handleKeyDown}
			/>
		);
	}
}
export default Input;
