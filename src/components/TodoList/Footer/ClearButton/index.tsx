import React from 'react';
import { ITodoItem } from '../../../../types/types';

import './ClearButton.scss';

interface ClearButton {
	onClick:()=>void,
	todoItemList: ITodoItem[]
}

function ClearButton({ onClick, todoItemList }:ClearButton) {
	const handleClick = () => {
		onClick();
	};
	const findCheckedItem = () => {
		return todoItemList.some((item) => item.done === true);
	};
	return findCheckedItem() ? (
		<button onClick={handleClick} className="clearButton">
			Clear Completed
		</button>
	) : null;
}

export default ClearButton;
