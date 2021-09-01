import React, { FC } from 'react';

import './Input.scss';

interface InputProps {
	value: string;
	onChange: (e: string) => void;
	onKeyDown: (e: string) => void;
}

const Input: FC<InputProps> = ({ value, onChange, onKeyDown }) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		onChange(e.target.value);
	};

	const handleKeyDown = (
		e: React.KeyboardEvent<HTMLInputElement> & { target: HTMLInputElement },
	): void => {
		if (e.key === 'Enter') {
			onKeyDown(e.target.value);
			e.target.value = '';
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
