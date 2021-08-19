import React, { Component } from 'react';
import Button from '../Button/Button.jsx';

export default class ButtonGroup extends Component {
	constructor() {
		super();
		this.activeFilter = ['All', 'Active', 'Completed'];
	}

	render() {
		let active = false;
		return (
			<div>
				<Button
					value="All"
					onClick={(e) => this.handleClick(e)}
					id="all"
					active={active}
				/>
				<Button
					value="Active"
					onClick={(e) => this.handleClick(e)}
					id="active"
					active={active}
				/>
				<Button
					value="Completed"
					onClick={(e) => this.handleClick(e)}
					id="completed"
					active={active}
				/>
			</div>
		);
	}
}
