import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e) {
		const { onClick, setActiveFilter } = this.props;
		onClick(e);
		setActiveFilter(e);
	}

	render() {
		return (
			<button
				className={this.props.active ? 'button active' : 'button'}
				onClick={this.handleClick}
			>
				{this.props.value}
			</button>
		);
	}
}
export default Button;
