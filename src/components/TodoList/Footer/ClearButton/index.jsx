import React from 'react';

import './ClearButton.scss';

function ClearButton({ onClick, todoItemList }) {
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
