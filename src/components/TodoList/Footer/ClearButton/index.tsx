import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../../../http';
import { deleteCompletedItemsAction } from '../../../../redux/actions/actionCreators/todoListActionCreators';
import { GetTodoList } from '../../../../redux/selectors/todo';
import { ITodoItem } from '../../../../interfaices/interfaces';

import './ClearButton.scss';

const ClearButton: FC = () => {
	const todoItemList = useSelector(GetTodoList);
	const userId = localStorage.getItem('userId');
	const dispatch = useDispatch();

	const handleClick = async () => {
		try {
			const checkeditems = todoItemList.filter((item) => item.done === true);
			const config = {
				data: {
					checkeditems,
				},
			};

			await api.delete<ITodoItem[]>(
				`/todolist/todo/deleteMany/${userId}`,
				config,
			);
			dispatch(
				deleteCompletedItemsAction(
					todoItemList.filter((item: ITodoItem) => item.done === false),
				),
			);
		} catch (e) {
			console.log(e);
		}
	};

	const findCheckedItem = (): boolean => {
		return todoItemList.some((item) => item.done === true);
	};
	return findCheckedItem() ? (
		<button onClick={handleClick} className="clearButton">
			Clear Completed
		</button>
	) : null;
};

export default ClearButton;
