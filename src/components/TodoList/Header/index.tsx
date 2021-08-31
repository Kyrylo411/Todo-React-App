import React, { FC } from 'react';
import ArrowButton from './ArrowButton';
import Input from './Input';

import './Header.scss';
import { ITodoItem } from '../../../interfaces/interfaces';

interface HeaderProps {
	todoItemList: ITodoItem[];
	value: string;
	toggleAllItems: () => void;
	changeInputValue: () => void;
	addListItem: () => void;
}

const Header: FC<HeaderProps> = ({
	todoItemList,
	value,
	toggleAllItems,
	changeInputValue,
	addListItem,
}) => {
	return (
		<div className="inputContainer">
			<ArrowButton onClick={toggleAllItems} todoItemList={todoItemList} />
			<Input
				onKeyDown={addListItem}
				onChange={changeInputValue}
				value={value}
			/>
		</div>
	);
};

export default Header;
