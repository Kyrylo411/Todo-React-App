import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';

import { addItemRequest } from '../../../../redux/actions/actionCreators/todoListActionCreators';
import './Input.scss';

const Input: FC = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setValue(e.target.value);
	};

	const handleKeyDown = async (
		e: React.KeyboardEvent<HTMLInputElement> & { target: HTMLInputElement },
	) => {
		if (e.key === 'Enter') {
			if (e.target.value.trim()) {
				dispatch(addItemRequest(e.target.value));
				setValue('');
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
