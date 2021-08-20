import React, { Component } from 'react';
import './ArrowButton.scss';

class ArrowButton extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		this.props.onArrowClick(e);
	}

	render() {
		// console.log(this.props.arrowDark); //for colorChange

		return (
			<div>
				<div
					className={this.props.visible ? 'arrow arrowVisible' : 'arrow'}
					onClick={this.handleClick}
				>
					❯
				</div>
			</div>
		);
	}
}

export default ArrowButton;
