import React from 'react';
import ArrowButton from './ArrowButton';
import Input from './Input';

import './Header.scss';

function Header({
	todoItemList,
	value,
	toggleAllItems,
	changeInputValue,
	addListItem,
}) {
	return (
		<div className="inputContainer">
			<ArrowButton onClick={toggleAllItems} todoItemList={todoItemList} />
			<Input
				onKeyDown={addListItem}
				onChange={changeInputValue}
				value={value}
				todoItemList={todoItemList}
			/>
		</div>
	);
}

export default Header;
