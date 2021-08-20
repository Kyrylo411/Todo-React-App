import React, { Component } from 'react';

import Header from '../Header/Header.jsx';
import List from '../List/List.jsx';
import Footer from '../Footer/Footer.jsx';
import UnderLines from '../UnderLines/UnderLines.jsx';
import './TodoList.scss';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todoItemList: [],
			activeFilter: {
				filter: 'All',
			},
			inputValue: '',
		};
		this.onInputChange = this.onInputChange.bind(this);
		this.onKeyDown = this.onKeyDown.bind(this);
		this.onCheckBoxChange = this.onCheckBoxChange.bind(this);
		this.onDelete = this.onDelete.bind(this);
		this.onArrowClick = this.onArrowClick.bind(this);
		this.onClearCompleted = this.onClearCompleted.bind(this);
		this.setActiveFilter = this.setActiveFilter.bind(this);
		// this.changeArrowClassName = this.changeArrowClassName.bind(this);
	}
	setActiveFilter(e) {
		//функция не должна работать с "е", а должна с передаваемым значением textValue, и так все функции пересмотреть
		this.setState({
			...this.state,
			activeFilter: {
				filter: e.target.textContent,
			},
		});
	}
	onClearCompleted() {
		this.setState({
			todoItemList: this.state.todoItemList.filter(
				(item) => item.done === false,
			),
		});
	}
	onArrowClick() {
		//toggleAllItems
		const isAllItemsChecked = this.state.todoItemList.every(
			(item) => item.done === true,
		);
		this.setState({
			todoItemList: this.state.todoItemList.map((item) =>
				isAllItemsChecked ? { ...item, done: false } : { ...item, done: true },
			),
		});
		// e.target.className = isAllItemsChecked
		// 	? 'arrow arrowVisible'
		// 	: 'arrow arrowVisible arrowDark';
	}
	onCheckBoxChange(id, isChecked) {
		this.setState({
			todoItemList: this.state.todoItemList.map((item) => {
				//
				return item.id === id ? { ...item, done: isChecked } : item;
			}),
		});
	}
	onDelete(id) {
		this.setState({
			todoItemList: this.state.todoItemList.filter((item) => item.id !== id),
		});
	}
	onInputChange(e) {
		this.setState({ inputValue: e.target.value });
	}
	onKeyDown(e) {
		//addItem...rename
		if (e.target.value.trim()) {
			this.setState({
				todoItemList: [
					...this.state.todoItemList,
					{
						value: e.target.value,
						id: Date.now(),
						done: false,
					},
				],
				inputValue: '',
			});
		}
	}
	// changeArrowClassName() {
	// 	return this.state.todoItemList.some((item) => item.done === false);
	// }

	render() {
		const visible = this.state.todoItemList.length;
		return (
			<>
				<div className="todoWrapper">
					<Header
						onArrowClick={this.onArrowClick}
						onInputChange={this.onInputChange}
						onKeyDown={this.onKeyDown}
						value={this.state.inputValue}
						visible={visible}
						// arrowDark={this.changeArrowClassName()}
					/>
					<List
						todoItemList={this.state.todoItemList}
						onCheckBoxChange={this.onCheckBoxChange}
						onDelete={this.onDelete}
					/>
					<Footer
						onClearCompleted={this.onClearCompleted}
						todoItemList={this.state.todoItemList}
						setActiveFilter={this.setActiveFilter}
					/>
				</div>
				<UnderLines visible={visible} />
			</>
		);
	}
}

export default TodoList;
