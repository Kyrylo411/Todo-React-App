import React, { Component } from 'react';
import './ArrowButton.scss';

class ArrowButton extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		const isAllItemsChecked = this.props.todoItemList.every(
			(item) => item.done === true,
		);
		this.props.toggleAllItems(isAllItemsChecked);
	}

	render() {
		return (
			<div>
				<div
					className={
						this.props.todoItemList.length ? 'arrow arrowVisible' : 'arrow'
					}
					onClick={this.handleClick}
				>
					❯
				</div>
			</div>
		);
	}
}

export default ArrowButton;
