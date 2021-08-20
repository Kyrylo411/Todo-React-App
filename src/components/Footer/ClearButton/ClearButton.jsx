import React, { Component } from 'react';

import './ClearButton.scss';

class ClearButton extends Component {
	constructor(props) {
		super(props);
		this.findCheckedItem = this.findCheckedItem.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.props.onClearCompleted();
	}
	findCheckedItem() {
		return this.props.todoItemList.some((item) => item.done === true);
	}
	render() {
		return (
			<button
				onClick={this.handleClick}
				className={
					this.findCheckedItem() ? 'clearButton visible' : 'clearButton'
				}
			>
				Clear Completed
			</button>
		);
	}
}
export default ClearButton;
