import React, { Component } from 'react';

import DeleteButton from '../DeleteButton/DeleteButton.jsx';
import CheckBox from '../CheckBox/CheckBox.jsx';
import './TodoItem.scss';

export default class TodoItem extends Component {
	render() {
		return (
			<li className="todoitem" id={this.props.id}>
				<CheckBox />
				<p className="itemText"> {this.props.value} </p>
				<DeleteButton />
			</li>
		);
	}
}
