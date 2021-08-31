import React, { FC } from 'react';
import { ITodoItem } from '../../../../interfaces/interfaces';

import './ClearButton.scss';

interface ClearButtonProps {
	onClick: () => void;
	todoItemList: ITodoItem[];
}

const ClearButton: FC<ClearButtonProps> = ({ onClick, todoItemList }) => {
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
};

export default ClearButton;
