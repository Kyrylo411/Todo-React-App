import React, { Component } from 'react';

import './ClearButton.scss';

class ClearButton extends Component {
	constructor(props) {
		super(props);
		this.findCheckedItem = this.findCheckedItem.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.props.onClick();
	}
	findCheckedItem() {
		return this.props.todoItemList.some((item) => item.done === true);
	}
	render() {
		return this.findCheckedItem() ? (
			<button onClick={this.handleClick} className="clearButton">
				Clear Completed
			</button>
		) : null;
	}
}
export default ClearButton;
