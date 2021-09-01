import React, { FC } from 'react';
import { ITodoItem } from '../../../interfaces';

import './ClearButton.scss';

interface ClearButtonProps {
	onClick: () => void;
	todoItemList: ITodoItem[];
}

const ClearButton: FC<ClearButtonProps> = ({ onClick, todoItemList }) => {
	const handleClick = (): void => {
		onClick();
	};
	const findCheckedItem = (): boolean => {
		return todoItemList.some((item) => item.done === true);
	};
	return findCheckedItem() ? (
		<button onClick={handleClick} className="clearButton">
			Clear Completed
		</button>
	) : null;
};

export default ClearButton;
