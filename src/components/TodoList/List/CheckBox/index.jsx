import React, { Component } from 'react';

import './CheckBox.scss';

class CheckBox extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e) {
		e.stopPropagation();
	}
	handleChange(e) {
		this.props.changeItemCheck(this.props.id, e.target.checked);
	}

	render() {
		return (
			<label className="container">
				<input
					onChange={this.handleChange}
					type="checkBox"
					checked={this.props.isChecked}
					onClick={this.handleClick}
				/>
				<span className="checkmark" />
			</label>
		);
	}
}

export default CheckBox;
