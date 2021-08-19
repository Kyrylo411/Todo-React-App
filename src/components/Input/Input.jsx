import React, { Component } from 'react';
import './Input.scss';

export default class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
		this.setState({
			value: e.target.value,
		});
	}
	render() {
		return (
			<input
				className="input"
				value={this.state.value}
				onChange={(e) => this.handleChange(e)}
				placeholder="What needs to be done?"
			/>
		);
	}
}
