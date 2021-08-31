import React, { FC } from 'react';

import Button from '../../../../Button';

interface ButtonWrapperProps {
	item: string;
	active: boolean;
	onClick: (item: string) => void;
}

const ButtonWrapper: FC<ButtonWrapperProps> = ({ item, active, onClick }) => {
	const handleClick = () => {
		onClick(item);
	};
	return (
		<div>
			<Button active={active} value={item} onClick={handleClick} />
		</div>
	);
};

export default ButtonWrapper;
