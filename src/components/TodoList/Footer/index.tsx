import React, { FC } from 'react';

import ClearButton from './ClearButton';
import ButtonGroup from './ButtonGroup';
import './Footer.scss';
import { useSelector } from 'react-redux';
import { GetTodoList } from '../../../selectors/todo';

interface FooterProps {
	activeFilter: string;
	setActiveFilter: (textValue: string) => void;
}

const Footer: FC<FooterProps> = ({ activeFilter, setActiveFilter }) => {
	const todoItemList = useSelector(GetTodoList);
	const countItems = (): string => {
		const notCheckeditems = todoItemList.filter((item) => item.done === false);
		return notCheckeditems.length > 1 || notCheckeditems.length === 0
			? `${notCheckeditems.length} items left`
			: `${notCheckeditems.length} item left`;
	};

	return todoItemList.length ? (
		<div className="footer">
			<p>{countItems()}</p>
			<ButtonGroup
				setActiveFilter={setActiveFilter}
				activeFilter={activeFilter}
			/>
			<ClearButton />
		</div>
	) : null;
};

export default Footer;
