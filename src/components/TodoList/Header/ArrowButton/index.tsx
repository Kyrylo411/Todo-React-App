import React, { FC } from 'react';
import classNames from 'classnames';

import './ArrowButton.scss';
import { ITodoItem } from '../../../../interfaces/interfaces';

interface ArrowButtonProps {
	todoItemList: ITodoItem[];
	onClick: (isAllItemsChecked: boolean) => void;
}

const ArrowButton: FC<ArrowButtonProps> = ({ todoItemList, onClick }) => {
	const handleClick = () => {
		const isAllItemsChecked = todoItemList.every((item) => item.done === true);
		onClick(isAllItemsChecked);
	};
	const arrowClass = classNames({
		arrow: true,
		arrowVisible: todoItemList.length,
		arrowDark: todoItemList.every((item) => item.done === true),
	});
	return (
		<div>
			<div className={arrowClass} onClick={handleClick}>
				❯
			</div>
		</div>
	);
};

export default ArrowButton;
