import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';

import Header from './Header';
import List from './List';
import Footer from './Footer';
import UnderLines from './UnderLines';
import './TodoList.scss';
import { FilterMap, ITodoItem } from '../../interfaces/interfaces';

const TodoList: FC = () => {
	const [todoItemList, setTodoItemList] = useState<ITodoItem[]>([]);
	const [inputValue, setInputValue] = useState<string>('');
	const [activeFilter, setActiveFilter] = useState<keyof FilterMap>('All');

	const changeActiveFilter = (textValue: keyof FilterMap) => {
		setActiveFilter(textValue);
	};
	const deleteCompletedItems = () => {
		const deleteCompletedItems = async () => {
			try {
				const checkeditems = todoItemList.filter((item) => item.done === true);
				const config = {
					data: {
						checkeditems,
					},
				};
				await axios.delete('http://localhost:5000/todo', config);
				setTodoItemList(todoItemList.filter((item) => item.done === false));
			} catch (e) {
				console.log(e);
			}
		};
		deleteCompletedItems();
	};
	const toggleAllItems = (isAllItemsChecked: boolean): void => {
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
	const changeItemCheck = (id: string, isChecked: boolean) => {
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
	const deleteItem = (id: string) => {
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
	const changeInputValue = (textValue: string) => {
		setInputValue(textValue);
	};
	const addListItem = (inputValue: string) => {
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
	const changeItemValue = (inputValue: string, id: string) => {
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
				const res = await axios.get<ITodoItem[]>('http://localhost:5000/todo');
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
};

export default TodoList;
