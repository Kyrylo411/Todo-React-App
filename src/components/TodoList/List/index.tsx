import React, { FC } from 'react';

import ListItem from './ListItem';
import './List.scss';
import { FilterMap, ITodoItem } from '../../../interfaces/interfaces';

interface ListProps {
	todoItemList: ITodoItem[];
	deleteItem: () => void;
	changeItemValue: () => void;
	changeItemCheck: () => void;
	activeFilter: keyof FilterMap;
}

const List: FC<ListProps> = ({
	todoItemList,
	deleteItem,
	changeItemValue,
	changeItemCheck,
	activeFilter,
}) => {
	const setListToRender = () => {
		const todoListToRender = todoItemList.filter((item) => {
			const filterMap: FilterMap = {
				Active: !item.done ? item : null,
				Completed: item.done ? item : null,
				All: item,
			};
			return filterMap[activeFilter];
		});
		return todoListToRender;
	};
	return (
		<ul className="todoList">
			{setListToRender().map((item) => {
				return (
					<ListItem
						key={item._id}
						item={item}
						changeItemCheck={changeItemCheck}
						id={item._id}
						deleteItem={deleteItem}
						onChange={changeItemValue}
					/>
				);
			})}
		</ul>
	);
};

export default List;
