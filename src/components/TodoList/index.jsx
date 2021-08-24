import React, { Component } from 'react';

import Header from './Header';
import List from './List';
import Footer from './Footer';
import UnderLines from './UnderLines';
import './TodoList.scss';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todoItemList: [],
			inputValue: '',
			filters: [
				{
					filter: 'All',
					active: true,
				},
				{
					filter: 'Active',
					active: false,
				},
				{
					filter: 'Completed',
					active: false,
				},
			],
		};
		this.changeInputValue = this.changeInputValue.bind(this);
		this.addListItem = this.addListItem.bind(this);
		this.changeItemCheck = this.changeItemCheck.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
		this.toggleAllItems = this.toggleAllItems.bind(this);
		this.deleteCompletedItems = this.deleteCompletedItems.bind(this);
		this.setActiveFilter = this.setActiveFilter.bind(this);
		this.changeItemValue = this.changeItemValue.bind(this);
	}
	setActiveFilter(textValue) {
		this.setState({
			filters: this.state.filters.map((item) =>
				textValue === item.filter
					? { ...item, active: true }
					: { ...item, active: false },
			),
		});
	}
	deleteCompletedItems() {
		this.setState({
			todoItemList: this.state.todoItemList.filter(
				(item) => item.done === false,
			),
		});
	}
	toggleAllItems(isAllItemsChecked) {
		this.setState({
			todoItemList: this.state.todoItemList.map((item) =>
				isAllItemsChecked ? { ...item, done: false } : { ...item, done: true },
			),
		});
	}
	changeItemCheck(id, isChecked) {
		this.setState({
			todoItemList: this.state.todoItemList.map((item) =>
				item.id === id ? { ...item, done: isChecked } : item,
			),
		});
	}
	deleteItem(id) {
		this.setState({
			todoItemList: this.state.todoItemList.filter((item) => item.id !== id),
		});
	}
	changeInputValue(textValue) {
		this.setState({ inputValue: textValue });
	}
	addListItem(inputValue) {
		if (inputValue.trim()) {
			this.setState({
				todoItemList: [
					...this.state.todoItemList,
					{
						value: inputValue,
						id: Date.now(),
						done: false,
					},
				],
				inputValue: '',
			});
		}
	}
	changeItemValue(inputValue, id) {
		if (inputValue.trim()) {
			this.setState({
				todoItemList: this.state.todoItemList.map((item) => {
					return item.id === id ? { ...item, value: inputValue } : item;
				}),
			});
		}
	}
	render() {
		const visible = this.state.todoItemList.length;
		return (
			<>
				<div className="todoWrapper">
					<Header
						toggleAllItems={this.toggleAllItems}
						changeInputValue={this.changeInputValue}
						addListItem={this.addListItem}
						value={this.state.inputValue}
						todoItemList={this.state.todoItemList}
					/>
					<List
						todoItemList={this.state.todoItemList}
						filters={this.state.filters}
						changeItemCheck={this.changeItemCheck}
						deleteItem={this.deleteItem}
						changeItemValue={this.changeItemValue}
					/>
					<Footer
						deleteCompletedItems={this.deleteCompletedItems}
						todoItemList={this.state.todoItemList}
						setActiveFilter={this.setActiveFilter}
						filters={this.state.filters}
					/>
				</div>
				<UnderLines visible={visible} />
			</>
		);
	}
}

export default TodoList;
