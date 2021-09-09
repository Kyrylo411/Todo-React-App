import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../../components/TodoList/Header';
import List from '../../components/TodoList/List';
import Footer from '../../components/TodoList/Footer';
import UnderLines from '../../components/TodoList/UnderLines';
import './TodoList.scss';
import { Filter, ITodoItem } from '../../components/interfaces';
import { GetTodoList } from '../../selectors/todo';
import {
	getItemListAction,
	addItemAction,
	deleteItemAction,
	deleteCompletedItemsAction,
	toggleAllItemsAction,
	changeItemCheckAction,
	changeItemValueAction,
} from '../../redux/actions/actionCreators/todoListActionCreators';
import { baseUrl, userId } from '../../constants';
import Page from '../../components/Page';

const TodoList: FC = () => {
	const [inputValue, setInputValue] = useState('');
	const [activeFilter, setActiveFilter] = useState<Filter>('All');

	const dispatch = useDispatch();
	const todoList = useSelector(GetTodoList);

	const changeActiveFilter = (textValue: Filter): void => {
		setActiveFilter(textValue);
	};
	const deleteCompletedItems = (): void => {
		const deleteCompletedItems = async () => {
			try {
				const checkeditems = todoList.filter((item) => item.done === true);
				const config = {
					data: {
						checkeditems,
					},
				};
				await axios.delete(`${baseUrl}/todo/deleteMany/${userId}`, config);
				dispatch(
					deleteCompletedItemsAction(
						todoList.filter((item) => item.done === false),
					),
				);
			} catch (e) {
				console.log(e);
			}
		};
		deleteCompletedItems();
	};
	const toggleAllItems = (isAllItemsChecked: boolean): void => {
		const updateAllItemsCheck = async () => {
			try {
				await axios.put(`${baseUrl}/todo/${isAllItemsChecked}/${userId}`);
				dispatch(
					toggleAllItemsAction(
						todoList.map((item) =>
							isAllItemsChecked
								? { ...item, done: false }
								: { ...item, done: true },
						),
					),
				);
			} catch (e) {
				console.log(e);
			}
		};
		updateAllItemsCheck();
	};
	const changeItemCheck = (id: string, isChecked: boolean): void => {
		const updateItemCheck = async () => {
			try {
				const res = await axios.put(`${baseUrl}/todo`, {
					_id: id,
					done: isChecked,
				});
				dispatch(
					changeItemCheckAction(
						todoList.map((item) =>
							item._id === res.data._id ? { ...item, done: isChecked } : item,
						),
					),
				);
			} catch (e) {
				console.log(e);
			}
		};
		updateItemCheck();
	};
	const deleteItem = (id: string): void => {
		const deleteItem = async () => {
			try {
				await axios.delete(`${baseUrl}/todo/${id}`);
				dispatch(deleteItemAction(todoList.filter((item) => item._id !== id)));
			} catch (e) {
				console.log(e);
			}
		};

		deleteItem();
	};
	const changeInputValue = (textValue: string): void => {
		setInputValue(textValue);
	};
	const addListItem = (inputValue: string): void => {
		const postListItem = async () => {
			try {
				if (inputValue.trim()) {
					const res = await axios.post(`${baseUrl}/todo/${userId}`, {
						value: inputValue,
						done: false,
					});
					dispatch(
						addItemAction({
							value: inputValue,
							_id: res.data._id,
							done: false,
						}),
					);
					setInputValue('');
				}
			} catch (e) {
				console.log(e);
			}
		};

		postListItem();
	};

	const changeItemValue = (inputValue: string, id: string): void => {
		const updateInputValue = async () => {
			try {
				if (inputValue.trim()) {
					await axios.put(`${baseUrl}/todo`, {
						_id: id,
						value: inputValue,
					});
					dispatch(
						changeItemValueAction(
							todoList.map((item) => {
								return item._id === id ? { ...item, value: inputValue } : item;
							}),
						),
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
				const res = await axios.get<ITodoItem[]>(`${baseUrl}/todo/${userId}`);
				dispatch(getItemListAction(res.data));
			} catch (e) {
				throw new Error(e);
			}
		};
		getItemsToRender();
	}, []);

	return (
		<Page>
			<h1 className="todos">todos</h1>
			<div className="todoWrapper">
				<Header
					toggleAllItems={toggleAllItems}
					changeInputValue={changeInputValue}
					addListItem={addListItem}
					value={inputValue}
					todoItemList={todoList}
				/>
				<List
					activeFilter={activeFilter}
					todoItemList={todoList}
					changeItemCheck={changeItemCheck}
					deleteItem={deleteItem}
					changeItemValue={changeItemValue}
				/>
				<Footer
					todoItemList={todoList}
					deleteCompletedItems={deleteCompletedItems}
					setActiveFilter={changeActiveFilter}
					activeFilter={activeFilter}
				/>
			</div>
			<UnderLines visible={todoList.length} />
		</Page>
	);
};

export default TodoList;
