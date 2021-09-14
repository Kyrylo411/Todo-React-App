import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import api from '../../../../http';
import { addItemAction } from '../../../../redux/actions/actionCreators/todoListActionCreators';
import { ITodoItem } from '../../../interfaces';
import './Input.scss';

const Input: FC = () => {
	const [value, setValue] = useState('');
	const userId = localStorage.getItem('userId');
	const dispatch = useDispatch();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setValue(e.target.value);
	};

	const handleKeyDown = async (
		e: React.KeyboardEvent<HTMLInputElement> & { target: HTMLInputElement },
	) => {
		if (e.key === 'Enter') {
			try {
				if (e.target.value.trim()) {
					const res = await api.post<ITodoItem>(`/todolist/todo/${userId}`, {
						value: e.target.value,
						done: false,
					});
					dispatch(
						addItemAction({
							value: e.target.value,
							_id: res.data._id,
							done: false,
						}),
					);
					setValue('');
				}
			} catch (e) {
				console.log(e);
			}
		}
	};

	return (
		<input
			className="input"
			value={value}
			placeholder="What needs to be done?"
			onChange={handleChange}
			onKeyDown={handleKeyDown}
		/>
	);
};
export default Input;
