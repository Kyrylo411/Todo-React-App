import React, { FC } from 'react';
import './CheckBox.scss';

interface CheckBoxProps {
	id: string;
	onChange: (id: string, e: boolean) => void;
	isChecked: boolean;
}

const CheckBox: FC<CheckBoxProps> = ({ id, onChange, isChecked }) => {
	const handleClick = (e: React.MouseEvent) => {
		e.stopPropagation();
	};
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
};

export default CheckBox;
