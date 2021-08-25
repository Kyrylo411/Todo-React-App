import React, { Component } from 'react';

import './Button.scss';
import classNames from 'classnames';

class Button extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.onClick();
	}
	render() {
		return (
			<button
				className={classNames({
					button: true,
					active: this.props.active,
				})}
				onClick={this.handleClick}
			>
				{this.props.value}
			</button>
		);
	}
}
export default Button;
