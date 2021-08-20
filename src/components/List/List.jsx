import React, { Component } from 'react';

import ListItem from './ListItem/ListItem.jsx';
import './List.scss';

class List extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		// console.log(this.props.todoItemList);
		return (
			<ul className="todoList">
				{this.props.todoItemList.map((item) => {
					return (
						<ListItem
							key={item.id}
							itemInfo={item}
							onCheckBoxChange={this.props.onCheckBoxChange}
							id={item.id}
							onDelete={this.props.onDelete}
						/>
					);
				})}
			</ul>
		);
	}
}
export default List;
