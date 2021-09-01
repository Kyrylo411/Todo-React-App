import React, { FC } from 'react';

import ListItem from './ListItem';
import './List.scss';
import { Filter, FilterMap, ITodoItem } from '../../interfaces';

interface ListProps {
	todoItemList: ITodoItem[];
	deleteItem: (id: string) => void;
	changeItemValue: (inputValue: string, id: string) => void;
	changeItemCheck: (id: string, isChecked: boolean) => void;
	activeFilter: Filter;
}

const List: FC<ListProps> = ({
	todoItemList,
	deleteItem,
	changeItemValue,
	changeItemCheck,
	activeFilter,
}) => {
	const setListToRender = (): ITodoItem[] => {
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
