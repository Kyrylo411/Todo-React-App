import React, { Component } from 'react';

import './Button.scss';
import classNames from 'classnames';

class Button extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e) {
		this.props.onClick(e.target.textContent);
	}

	render() {
		const btnClass = classNames({
			button: true,
			active: this.props.active,
		});
		return (
			<button
				className={btnClass}
				onClick={(e) => this.props.onClick(e.target.textContent)}
			>
				{this.props.value}
			</button>
		);
	}
}
export default Button;
