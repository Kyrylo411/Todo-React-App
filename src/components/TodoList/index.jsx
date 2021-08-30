import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from './Header';
import List from './List';
import Footer from './Footer';
import UnderLines from './UnderLines';
import './TodoList.scss';

function TodoList() {
	const [todoItemList, setTodoItemList] = useState([]);
	const [inputValue, setInputValue] = useState('');
	const [activeFilter, setActiveFilter] = useState('All');

	const changeActiveFilter = (textValue) => {
		setActiveFilter(textValue);
	};
	const deleteCompletedItems = () => {
		const deleteCompletedItems = async () => {
			try {
				const checkeditems = todoItemList.filter((item) => item.done === true);
				await axios.delete('http://localhost:5000/todo', checkeditems);
				setTodoItemList(todoItemList.filter((item) => item.done === false));
			} catch (e) {
				console.log(e);
			}
		};
		deleteCompletedItems();
	};
	const toggleAllItems = (isAllItemsChecked) => {
		const updateAllItemsCheck = async () => {
			try {
				await axios.put(`http://localhost:5000/todo/${isAllItemsChecked}`);
				setTodoItemList(
					todoItemList.map((item) =>
						isAllItemsChecked
							? { ...item, done: false }
							: { ...item, done: true },
					),
				);
			} catch (e) {
				console.log(e);
			}
		};
		updateAllItemsCheck();
	};
	const changeItemCheck = (id, isChecked) => {
		const updateItemCheck = async () => {
			try {
				const res = await axios.put('http://localhost:5000/todo', {
					_id: id,
					done: isChecked,
				});
				setTodoItemList(
					todoItemList.map((item) =>
						item._id === res.data._id ? { ...item, done: isChecked } : item,
					),
				);
			} catch (e) {
				console.log(e);
			}
		};
		updateItemCheck();
	};
	const deleteItem = (id) => {
		const deleteItem = async () => {
			try {
				await axios.delete(`http://localhost:5000/todo/${id}`);
				setTodoItemList(todoItemList.filter((item) => item._id !== id));
			} catch (e) {
				console.log(e);
			}
		};

		deleteItem();
	};
	const changeInputValue = (textValue) => {
		setInputValue(textValue);
	};
	const addListItem = (inputValue) => {
		const postListItem = async () => {
			try {
				if (inputValue.trim()) {
					const res = await axios.post('http://localhost:5000/todo', {
						value: inputValue,
						done: false,
					});
					setTodoItemList([
						...todoItemList,
						{
							value: inputValue,
							_id: res.data._id,
							done: false,
						},
					]);
					setInputValue('');
				}
			} catch (e) {
				console.log(e);
			}
		};

		postListItem();
	};
	const changeItemValue = (inputValue, id) => {
		const updateInputValue = async () => {
			try {
				if (inputValue.trim()) {
					await axios.put('http://localhost:5000/todo', {
						_id: id,
						value: inputValue,
					});
					setTodoItemList(
						todoItemList.map((item) => {
							return item._id === id ? { ...item, value: inputValue } : item;
						}),
					);
				}
			} catch (e) {
				console.log(e);
			}
		};

		updateInputValue();
	};

	useEffect(() => {
		const getItemsToRender = async () => {
			try {
				const res = await axios.get('http://localhost:5000/todo');
				setTodoItemList(res.data);
			} catch (e) {
				console.log(e);
			}
		};
		getItemsToRender();
	}, []);

	return (
		<>
			<h1 className="todos">todos</h1>
			<div className="todoWrapper">
				<Header
					toggleAllItems={toggleAllItems}
					changeInputValue={changeInputValue}
					addListItem={addListItem}
					value={inputValue}
					todoItemList={todoItemList}
				/>
				<List
					activeFilter={activeFilter}
					todoItemList={todoItemList}
					changeItemCheck={changeItemCheck}
					deleteItem={deleteItem}
					changeItemValue={changeItemValue}
				/>
				<Footer
					deleteCompletedItems={deleteCompletedItems}
					todoItemList={todoItemList}
					setActiveFilter={changeActiveFilter}
					activeFilter={activeFilter}
				/>
			</div>
			<UnderLines visible={todoItemList.length} />
		</>
	);
}

export default TodoList;
