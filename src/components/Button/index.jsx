import React from 'react';

import './Button.scss';
import classNames from 'classnames';

function Button({ value, active, onClick }) {
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
