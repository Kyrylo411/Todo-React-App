import React from 'react';

import './Input.scss';

function Input({ value, onChange, onKeyDown }) {
	const handleChange = (e) => {
		onChange(e.target.value);
	};

	const handleKeyDown = (e) => {
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
}
export default Input;
