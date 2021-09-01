import React, { FC } from 'react';

import ClearButton from './ClearButton';
import ButtonGroup from './ButtonGroup';
import './Footer.scss';
import { ITodoItem } from '../../interfaces';

interface FooterProps {
	todoItemList: ITodoItem[];
	activeFilter: string;
	setActiveFilter: (textValue: string) => void;
	deleteCompletedItems: () => void;
}

const Footer: FC<FooterProps> = ({
	todoItemList,
	activeFilter,
	setActiveFilter,
	deleteCompletedItems,
}) => {
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
			<ClearButton onClick={deleteCompletedItems} todoItemList={todoItemList} />
		</div>
	) : null;
};

export default Footer;
