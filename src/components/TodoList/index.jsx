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
		const deleteCompletedItems = async () => {
			try {
				const checkeditems = this.state.todoItemList.filter(
					(item) => item.done === true,
				);
				await axios.delete('http://localhost:5000/todo', checkeditems);
				this.setState({
					todoItemList: this.state.todoItemList.filter(
						(item) => item.done === false,
					),
				});
			} catch (e) {
				console.log(e);
			}
		};
		deleteCompletedItems();
	}
	toggleAllItems(isAllItemsChecked) {
		const updateAllItemsCheck = async () => {
			try {
				await axios.put(`http://localhost:5000/todo/${isAllItemsChecked}`);
				this.setState({
					todoItemList: this.state.todoItemList.map((item) =>
						isAllItemsChecked
							? { ...item, done: false }
							: { ...item, done: true },
					),
				});
			} catch (e) {
				console.log(e);
			}
		};
		updateAllItemsCheck();
	}
	changeItemCheck(id, isChecked) {
		const updateItemCheck = async () => {
			try {
				const res = await axios.put('http://localhost:5000/todo', {
					_id: id,
					done: isChecked,
				});
				this.setState({
					todoItemList: this.state.todoItemList.map((item) =>
						item._id === res.data._id ? { ...item, done: isChecked } : item,
					),
				});
			} catch (e) {
				console.log(e);
			}
		};
		updateItemCheck();
	}
	deleteItem(id) {
		const deleteItem = async () => {
			try {
				await axios.delete(`http://localhost:5000/todo/${id}`);
				this.setState({
					todoItemList: this.state.todoItemList.filter(
						(item) => item._id !== id,
					),
				});
			} catch (e) {
				console.log(e);
			}
		};

		deleteItem();
	}
	changeInputValue(textValue) {
		this.setState({ inputValue: textValue });
	}
	addListItem(inputValue) {
		const postListItem = async () => {
			try {
				if (inputValue.trim()) {
					const res = await axios.post('http://localhost:5000/todo', {
						value: inputValue,
						done: false,
					});
					this.setState({
						todoItemList: [
							...this.state.todoItemList,
							{
								value: inputValue,
								_id: res.data._id,
								done: false,
							},
						],
						inputValue: '',
					});
				}
			} catch (e) {
				console.log(e);
			}
		};

		postListItem();
	}
	changeItemValue(inputValue, id) {
		const updateInputValue = async () => {
			try {
				if (inputValue.trim()) {
					await axios.put('http://localhost:5000/todo', {
						_id: id,
						value: inputValue,
					});
					this.setState({
						todoItemList: this.state.todoItemList.map((item) => {
							return item._id === id ? { ...item, value: inputValue } : item;
						}),
					});
				}
			} catch (e) {
				console.log(e);
			}
		};

		updateInputValue();
	}
	componentDidMount() {
		const getItemsToRender = async () => {
			try {
				const res = await axios.get('http://localhost:5000/todo');
				this.setState({
					todoItemList: res.data,
				});
			} catch (e) {
				console.log(e);
			}
		};
		getItemsToRender();
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
