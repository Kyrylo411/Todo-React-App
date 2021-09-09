import React, { FC } from 'react';
import { Input } from '@material-ui/core';
import { useStyles } from './styles';

interface ICustomInputProps {
	type: string;
	required: boolean;
	value: string;
	onChange(e: string): void;
	isFocus: boolean;
	placeholder: string;
}

const CustomInput: FC<ICustomInputProps> = ({
	required,
	type,
	value,
	onChange,
	isFocus,
	placeholder,
}) => {
	const classes = useStyles();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value);
	};
	return (
		<div>
			<Input
				required={required}
				className={classes.input}
				autoFocus={isFocus}
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
				type={type}
			/>
		</div>
	);
};

export default CustomInput;
