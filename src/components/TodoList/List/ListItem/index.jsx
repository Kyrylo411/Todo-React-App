import React, { Component } from 'react';

import CheckBox from './CheckBox';
import './ListItem.scss';

class ListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editItem: false,
			inputValue: this.props.item.value,
		};
		this.handleDeleteClick = this.handleDeleteClick.bind(this);
		this.handleDoubleClick = this.handleDoubleClick.bind(this);
		this.editTodoInput = this.handleDoubleClick();
		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}
	handleClick(e) {
		e.stopPropagation();
	}
	handleBlur(e) {
		this.props.onChange(e.target.value, this.props.item.id);
		this.setState({ editItem: false });
	}
	handleKeyDown(e) {
		if (e.key === 'Enter') {
			this.props.onChange(e.target.value, this.props.item.id);
			this.setState({ editItem: false });
		}
	}
	handleInputChange(e) {
		this.setState({ inputValue: e.target.value });
	}
	handleDoubleClick() {
		let lastClick = 0;
		return () => {
			let isDblClick = false;
			const d = Date.now();
			isDblClick = d - lastClick < 400 ? true : false;
			lastClick = d;
			this.setState({
				editItem: isDblClick,
			});
		};
	}
	handleDeleteClick() {
		this.props.deleteItem(this.props.id);
	}
	render() {
		return (
			<li className="todoitem" onClick={this.editTodoInput}>
				{this.state.editItem ? (
					<input
						className="itemInput"
						autoFocus
						value={this.state.inputValue}
						onKeyDown={this.handleKeyDown}
						onClick={this.handleClick}
						onChange={this.handleInputChange}
						onBlur={this.handleBlur}
					/>
				) : (
					<>
						<CheckBox
							onChange={this.props.changeItemCheck}
							id={this.props.id}
							isChecked={this.props.item.done}
						/>
						<p className={this.props.item.done ? 'done' : 'notDone'}>
							{this.props.item.value}
						</p>

						<div onClick={this.handleDeleteClick} className="deleteButton" />
					</>
				)}
			</li>
		);
	}
}
export default ListItem;
