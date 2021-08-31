import React, { FC } from 'react';
import classNames from 'classnames';

import './Button.scss';

interface ButtonProps {   
	value: string;
	active: boolean;
	onClick: ()=>void;
}

const Button = ({ value, active, onClick }: ButtonProps)=> {
	const handleClick = () => {
		onClick();
	};
	return (
		<button
			className={classNames({
				button: true,
				active: active,
			})}
			onClick={handleClick}
		>
			{value}
		</button>
	);
}

export default Button;
