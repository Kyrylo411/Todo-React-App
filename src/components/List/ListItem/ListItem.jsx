import React, { Component } from 'react';

import CheckBox from '../CheckBox/CheckBox.jsx';
import './ListItem.scss';

class ListItem extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.props.onDelete(this.props.id);
	}
	render() {
		return (
			<li className="todoitem">
				<CheckBox
					onCheckBoxChange={this.props.onCheckBoxChange}
					id={this.props.id}
					isChecked={this.props.itemInfo.done}
				/>
				<p className={this.props.itemInfo.done ? 'done' : 'notDone'}>
					{' '}
					{this.props.itemInfo.value}{' '}
				</p>
				<div onClick={this.handleClick} className="deleteButton" />
			</li>
		);
	}
}
export default ListItem;
