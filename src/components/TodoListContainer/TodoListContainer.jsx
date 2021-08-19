import React, { Component } from 'react';

import InputContainer from '../InputContainer/InputContainer.jsx';
import TodoInfo from '../TodoInfo/TodoInfo.jsx';
import TodoList from '../TodoList/TodoList.jsx';
import './TodoListContainer.scss';

export default class TodoListContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todoItemList: [
				{
					value: 'hello',
					id: Date.now(),
					done: false,
				},
				{
					value: 'asc',
					id: Date.now() + 1,
					done: false,
				},
			],
		};
	}
	render() {
		const visible = this.state.todoItemList.length ? true : false;
		return (
			<div className="todoWrapper">
				<InputContainer visible={visible} />
				<TodoList todoItemList={this.state.todoItemList} />
				<TodoInfo visible={visible} />
			</div>
		);
	}
}
