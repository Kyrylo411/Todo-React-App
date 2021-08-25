import React, { Component } from 'react';

import ListItem from './ListItem';
import './List.scss';

class List extends Component {
	constructor(props) {
		super(props);
		this.setListToRender = this.setListToRender.bind(this);
	}
	setListToRender() {
		const todoListToRender = this.props.todoItemList.filter((item) => {
			const filterMap = {
				Active: !item.done ? item : null,
				Completed: item.done ? item : null,
				All: item,
			};
			return filterMap[this.props.activeFilter];
		});
		return todoListToRender;
	}
	render() {
		return (
			<ul className="todoList">
				{this.setListToRender().map((item) => {
					return (
						<ListItem
							key={item.id}
							item={item}
							changeItemCheck={this.props.changeItemCheck}
							id={item.id}
							deleteItem={this.props.deleteItem}
							onChange={this.props.changeItemValue}
						/>
					);
				})}
			</ul>
		);
	}
}
export default List;
