import React, { Component } from 'react';

import './CheckBox.scss';

class CheckBox extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
		this.props.onCheckBoxChange(this.props.id, e.target.checked);
	}

	render() {
		return (
			<label className="container">
				<input
					onChange={this.handleChange}
					type="checkBox"
					checked={this.props.isChecked}
				/>
				<span className="checkmark" />
			</label>
		);
	}
}

export default CheckBox;
