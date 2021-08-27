import React, { Component } from 'react';
import axios from 'axios';

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
			activeFilter: 'All',
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
			activeFilter: textValue,
		});
	}
	deleteCompletedItems() {
		const checkeditems = this.state.todoItemList.filter(
			(item) => item.done === true,
		);
		axios.delete('http://localhost:5000/todo', checkeditems);

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
		axios.put(`http://localhost:5000/todo/${id}`, {
			_id: id,
			done: isChecked,
		});

		this.setState({
			todoItemList: this.state.todoItemList.map((item) =>
				item._id === id ? { ...item, done: isChecked } : item,
			),
		});
	}
	deleteItem(id) {
		axios.delete(`http://localhost:5000/todo/${id}`);

		this.setState({
			todoItemList: this.state.todoItemList.filter((item) => item._id !== id),
		});
	}
	changeInputValue(textValue) {
		this.setState({ inputValue: textValue });
	}
	addListItem(inputValue) {
		axios.post('http://localhost:5000/todo', {
			value: inputValue,
			done: false,
		});

		if (inputValue.trim()) {
			this.setState({
				todoItemList: [
					...this.state.todoItemList,
					{
						value: inputValue,
						_id: Date.now(),
						done: false,
					},
				],
				inputValue: '',
			});
		}
	}
	changeItemValue(inputValue, id) {
		axios.put(`http://localhost:5000/todo/${id}`, {
			_id: id,
			value: inputValue,
		});

		console.log(id);
		if (inputValue.trim()) {
			this.setState({
				todoItemList: this.state.todoItemList.map((item) => {
					return item._id === id ? { ...item, value: inputValue } : item;
				}),
			});
		}
	}
	componentDidMount() {
		axios
			.get('http://localhost:5000/todo')
			.then((res) =>
				this.setState({
					todoItemList: res.data,
				}),
			)
			.catch((e) => console.log(e));
	}

	render() {
		return (
			<>
				<h1 className="todos">todos</h1>
				<div className="todoWrapper">
					<Header
						toggleAllItems={this.toggleAllItems}
						changeInputValue={this.changeInputValue}
						addListItem={this.addListItem}
						value={this.state.inputValue}
						todoItemList={this.state.todoItemList}
					/>
					<List
						activeFilter={this.state.activeFilter}
						todoItemList={this.state.todoItemList}
						changeItemCheck={this.changeItemCheck}
						deleteItem={this.deleteItem}
						changeItemValue={this.changeItemValue}
					/>
					<Footer
						deleteCompletedItems={this.deleteCompletedItems}
						todoItemList={this.state.todoItemList}
						setActiveFilter={this.setActiveFilter}
						activeFilter={this.state.activeFilter}
					/>
				</div>
				<UnderLines visible={this.state.todoItemList.length} />
			</>
		);
	}
}

export default TodoList;
