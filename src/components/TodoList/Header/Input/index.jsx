import React, { Component } from 'react';
import './Input.scss';

class Input extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
	}
	handleChange(e) {
		this.props.onChange(e.target.value);
	}
	handleKeyDown(e) {
		if (e.key === 'Enter') {
			this.props.onKeyDown(e.target.value);
			e.target.value = '';
		}
	}
	render() {
		return (
			<input
				className="input"
				value={this.props.value}
				placeholder="What needs to be done?"
				onChange={this.handleChange}
				onKeyDown={this.handleKeyDown}
			/>
		);
	}
}
export default Input;
