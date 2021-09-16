import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	changeItemValueRequest,
	deleteItemRequest,
} from '../../../../redux/actions/actionCreators/todoListActionCreators';
import { ITodoItem } from '../../../../interfaices/todos';

import CheckBox from './CheckBox';
import './ListItem.scss';

interface Props {
	item: ITodoItem;
	id: string;
}

const ListItem: FC<Props> = ({ item, id }) => {
	const [inputValue, setInputValue] = useState(item.value);
	const [editItem, setEditItem] = useState(false);
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
		dispatch(changeItemValueRequest({ id: id, value: inputValue }));
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
	const handleDeleteClick = () => {
		dispatch(deleteItemRequest(id));
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
