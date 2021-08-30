import React from 'react';
import './CheckBox.scss';

function CheckBox({ id, onChange, isChecked }) {
	const handleClick = (e) => {
		e.stopPropagation();
	};
	const handleChange = (e) => {
		onChange(id, e.target.checked);
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
}

export default CheckBox;
