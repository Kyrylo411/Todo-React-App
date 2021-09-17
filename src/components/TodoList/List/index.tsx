import React, { FC } from 'react';

import ListItem from './ListItem';
import './List.scss';
import { FilterTypes, FilterMap } from '../../../interfaices/todos';

import { useSelector } from 'react-redux';
import { GetTodoList } from '../../../redux/selectors/todo';
import { ITodoItem } from '../../../interfaices/todos';

interface Props {
	activeFilter: FilterTypes;
}

const List: FC<Props> = ({ activeFilter }) => {
	const setListToRender = (): ITodoItem[] => {
		const todoItemList = useSelector(GetTodoList);
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
			{setListToRender().map((item: ITodoItem) => {
				return <ListItem key={item._id} item={item} id={item._id} />;
			})}
		</ul>
	);
};

export default List;
