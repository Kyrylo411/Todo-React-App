import React, { Component } from 'react';
import './Input.scss';

class Input extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
	}
	handleChange(e) {
		this.props.changeInputValue(e.target.value);
	}
	handleKeyDown(e) {
		if (e.key === 'Enter') {
			this.props.addListItem(e.target.value);
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
