import React from 'react';
import classNames from 'classnames';

import './ArrowButton.scss';

function ArrowButton({ todoItemList, onClick }) {
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
}

export default ArrowButton;
