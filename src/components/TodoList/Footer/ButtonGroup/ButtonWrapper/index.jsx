import React, { Component } from 'react';

import Button from '../../../../Button';

class ButtonWrapper extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.onClick(this.props.item);
	}
	render() {
		return (
			<div>
				<Button
					value={this.props.item}
					active={this.props.active}
					onClick={this.handleClick}
				/>
			</div>
		);
	}
}

export default ButtonWrapper;
