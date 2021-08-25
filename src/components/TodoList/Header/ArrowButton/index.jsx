import classNames from 'classnames';
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
		this.props.onClick(isAllItemsChecked);
	}

	render() {
		const arrowClass = classNames({
			arrow: true,
			arrowVisible: this.props.todoItemList.length,
			arrowDark: this.props.todoItemList.every((item) => item.done === true),
		});

		return (
			<div>
				<div className={arrowClass} onClick={this.handleClick}>
					❯
				</div>
			</div>
		);
	}
}

export default ArrowButton;
