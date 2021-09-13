import React, { FC, useEffect, useState } from 'react';
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
import Page from '../../components/Page';
import api from '../../http';

const TodoList: FC = () => {
	const [inputValue, setInputValue] = useState('');
	const [activeFilter, setActiveFilter] = useState<Filter>('All');

	const dispatch = useDispatch();
	const todoList = useSelector(GetTodoList);
	const userId = localStorage.getItem('userId');

	const changeActiveFilter = (textValue: Filter): void => {
		setActiveFilter(textValue);
	};
	const deleteCompletedItems = async (): Promise<void> => {
		try {
			const checkeditems = todoList.filter((item) => item.done === true);
			const config = {
				data: {
					checkeditems,
				},
			};

			await api.delete<ITodoItem[]>(
				`/todolist/todo/deleteMany/${userId}`,
				config,
			);
			dispatch(
				deleteCompletedItemsAction(
					todoList.filter((item: ITodoItem) => item.done === false),
				),
			);
		} catch (e) {
			console.log(e);
		}
	};
	const toggleAllItems = async (isAllItemsChecked: boolean): Promise<void> => {
		try {
			await api.put<ITodoItem[]>(
				`/todolist/todo/${isAllItemsChecked}/${userId}`,
			);
			dispatch(
				toggleAllItemsAction(
					todoList.map((item: ITodoItem) =>
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
	const changeItemCheck = async (
		id: string,
		isChecked: boolean,
	): Promise<void> => {
		try {
			const res = await api.put<ITodoItem>(`/todolist/todo/`, {
				_id: id,
				done: isChecked,
			});
			dispatch(
				changeItemCheckAction(
					todoList.map((item: ITodoItem) =>
						item._id === res.data._id ? { ...item, done: isChecked } : item,
					),
				),
			);
		} catch (e) {
			console.log(e);
		}
	};

	const deleteItem = async (id: string): Promise<void> => {
		try {
			await api.delete<ITodoItem[]>(`/todolist/todo/${id}`);
			dispatch(
				deleteItemAction(todoList.filter((item: ITodoItem) => item._id !== id)),
			);
		} catch (e) {
			console.log(e);
		}
	};

	const changeInputValue = (textValue: string): void => {
		setInputValue(textValue);
	};

	const addListItem = async (inputValue: string): Promise<void> => {
		try {
			if (inputValue.trim()) {
				const res = await api.post<ITodoItem>(`/todolist/todo/${userId}`, {
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

	const changeItemValue = async (
		inputValue: string,
		id: string,
	): Promise<void> => {
		try {
			if (inputValue.trim()) {
				await api.put<ITodoItem[]>(`/todolist/todo`, {
					_id: id,
					value: inputValue,
				});
				dispatch(
					changeItemValueAction(
						todoList.map((item: ITodoItem) => {
							return item._id === id ? { ...item, value: inputValue } : item;
						}),
					),
				);
			}
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		const getItemsToRender = async (): Promise<void> => {
			try {
				const res = await api.get<ITodoItem[]>(`/todolist/todo/${userId}`);
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
