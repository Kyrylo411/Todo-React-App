import React, { useState } from 'react';

import CheckBox from './CheckBox';
import './ListItem.scss';

function ListItem({ item, onChange, deleteItem, changeItemCheck, id }) {
	const [inputValue, setInputValue] = useState(item.value);
	const [editItem, setEditItem] = useState(false);
	const handleClick = (e) => {
		e.stopPropagation();
	};
	const handleBlur = (e) => {
		onChange(e.target.value, item._id);
		setEditItem(false);
	};
	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			onChange(e.target.value, item._id);
			setEditItem(false);
		}
	};
	const handleInputChange = (e) => {
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
}

export default ListItem;
