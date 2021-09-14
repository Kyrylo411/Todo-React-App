import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../../../../http';
import { changeItemCheckAction } from '../../../../../redux/actions/actionCreators/todoListActionCreators';
import { GetTodoList } from '../../../../../redux/selectors/todo';
import { ITodoItem } from '../../../../../interfaices/todos';
import './CheckBox.scss';

interface Props {
	id: string;
	isChecked: boolean;
}

const CheckBox: FC<Props> = ({ id, isChecked }) => {
	const dispatch = useDispatch();
	const todoList = useSelector(GetTodoList);

	const handleClick = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		try {
			const checked = e.target.checked;
			const res = await api.put<ITodoItem>(`/todolist/todo/`, {
				_id: id,
				done: checked,
			});
			dispatch(
				changeItemCheckAction(
					todoList.map((item: ITodoItem) =>
						item._id === res.data._id ? { ...item, done: checked } : item,
					),
				),
			);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<label className="container">
			<input
				onChange={handleChange}
				type="checkBox"
				checked={isChecked}
				onClick={handleClick}
			/>
			<span className="checkmark" />
		</label>
	);
};

export default CheckBox;
