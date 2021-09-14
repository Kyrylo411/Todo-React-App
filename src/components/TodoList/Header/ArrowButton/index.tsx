import React, { FC } from 'react';
import classNames from 'classnames';
import jwt_decode from 'jwt-decode';

import './ArrowButton.scss';
import { useDispatch, useSelector } from 'react-redux';
import { GetTodoList } from '../../../../redux/selectors/todo';
import { ITodoItem } from '../../../../interfaices/todos';
import { toggleAllItemsAction } from '../../../../redux/actions/actionCreators/todoListActionCreators';
import api from '../../../../http';
import { customJwtPayload } from '../../../../interfaices/jwtPayload';

const ArrowButton: FC = () => {
	const todoItemList = useSelector(GetTodoList);
	const dispatch = useDispatch();

	const decodedToken: customJwtPayload = jwt_decode(
		localStorage.getItem('token'),
	);
	const userId = decodedToken._doc._id;

	const handleClick = async () => {
		const isAllItemsChecked = todoItemList.every((item) => item.done === true);
		try {
			await api.put<ITodoItem[]>(
				`/todolist/todo/${isAllItemsChecked}/${userId}`,
			);
			dispatch(
				toggleAllItemsAction(
					todoItemList.map((item: ITodoItem) =>
						isAllItemsChecked
							? { ...item, done: false }
							: { ...item, done: true },
					),
				),
			);
		} catch (e) {
			console.log(e);
		}
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
};

export default ArrowButton;
