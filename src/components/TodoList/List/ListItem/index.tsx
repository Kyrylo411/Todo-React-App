import React, { FC, MouseEvent, useState } from 'react';
import { ITodoItem } from '../../../../interfaces/interfaces';

import CheckBox from './CheckBox';
import './ListItem.scss';

interface ListItemProps {
	item: ITodoItem;
	onChange: (e: string, _id: string) => void;
	deleteItem: (id: string) => void;
	changeItemCheck: () => void;
	id: string;
}

const ListItem: FC<ListItemProps> = ({
	item,
	onChange,
	deleteItem,
	changeItemCheck,
	id,
}) => {
	const [inputValue, setInputValue] = useState(item.value);
	const [editItem, setEditItem] = useState(false);
	const handleClick = (e: MouseEvent) => {
		e.stopPropagation();
	};
	const handleBlur = (e: any) => {
		onChange(e.target.value, item._id);
		setEditItem(false);
	};
	const handleKeyDown = (e: any) => {
		if (e.key === 'Enter') {
			onChange(e.target.value, item._id);
			setEditItem(false);
		}
	};
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
		deleteItem(id);
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
					<CheckBox onChange={changeItemCheck} id={id} isChecked={item.done} />
					<p className={item.done ? 'done' : 'notDone'}>{item.value}</p>

					<div onClick={handleDeleteClick} className="deleteButton" />
				</>
			)}
		</li>
	);
};

export default ListItem;
