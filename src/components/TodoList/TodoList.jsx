import React, { Component } from 'react';

import TodoItem from '../TodoItem/TodoItem.jsx';
import './TodoList.scss';

export default class TodoList extends Component {
	constructor(props) {
		super(props);
		this.todoListRender = this.todoListRender.bind(this);
	}

	todoListRender() {
		return this.props.todoItemList.map((item) => {
			return (
				<TodoItem
					key={item.id}
					value={item.value}
					id={item.id}
					done={item.done}
				/>
			);
		});
	}

	render() {
		return <ul className="todoList">{this.todoListRender()}</ul>;
	}
}
