import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../../../http';
import {
	changeItemValueAction,
	deleteItemAction,
} from '../../../../redux/actions/actionCreators/todoListActionCreators';
import { GetTodoList } from '../../../../selectors/todo';
import { ITodoItem } from '../../../interfaces';

import CheckBox from './CheckBox';
import './ListItem.scss';

interface ListItemProps {
	item: ITodoItem;
	id: string;
}

const ListItem: FC<ListItemProps> = ({ item, id }) => {
	const [inputValue, setInputValue] = useState(item.value);
	const [editItem, setEditItem] = useState(false);
	const todoList = useSelector(GetTodoList);
	const dispatch = useDispatch();

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.stopPropagation();
	};
	const handleBlur = (e: React.ChangeEvent<HTMLInputElement>): void => {
		changeItemValue(e.target.value, item._id);
		setEditItem(false);
	};

	const handleKeyDown = (
		e: React.KeyboardEvent<HTMLInputElement> & { target: HTMLInputElement },
	): void => {
		if (e.key === 'Enter') {
			changeItemValue(e.target.value, item._id);
			setEditItem(false);
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

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setInputValue(e.target.value);
	};

	const handleDoubleClick = () => {
		let lastClick = 0;
		return () => {
			let isDblClick = false;
			const d = Date.now();
			isDblClick = d - lastClick < 400 ? true : false;
			lastClick = d;
			setEditItem(isDblClick);
		};
	};
	const editTodoInput = handleDoubleClick();
	const handleDeleteClick = async () => {
		try {
			await api.delete<ITodoItem[]>(`/todolist/todo/${id}`);
			dispatch(
				deleteItemAction(todoList.filter((item: ITodoItem) => item._id !== id)),
			);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<li className="todoitem" onClick={editTodoInput}>
			{editItem ? (
				<input
					className="itemInput"
					autoFocus
					value={inputValue}
					onKeyDown={handleKeyDown}
					onClick={handleClick}
					onChange={handleInputChange}
					onBlur={handleBlur}
				/>
			) : (
				<>
					<CheckBox id={id} isChecked={item.done} />
					<p className={item.done ? 'done' : 'notDone'}>{item.value}</p>

					<div onClick={handleDeleteClick} className="deleteButton" />
				</>
			)}
		</li>
	);
};

export default ListItem;
