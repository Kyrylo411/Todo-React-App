import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<button
				className={this.props.active ? 'button active' : 'button'}
				onClick={this.props.onClick}
				id={this.props.id}
			>
				{this.props.value}
			</button>
		);
	}
}
export default Button;
