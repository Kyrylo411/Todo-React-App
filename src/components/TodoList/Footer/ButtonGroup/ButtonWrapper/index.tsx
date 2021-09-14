import React, { FC } from 'react';

import Button from '../../../../Button';

interface Props {
	item: string;
	active: boolean;
	onClick: (item: string) => void;
}

const ButtonWrapper: FC<Props> = ({ item, active, onClick }) => {
	const handleClick = (): void => {
		onClick(item);
	};
	return (
		<div>
			<Button active={active} value={item} onClick={handleClick} />
		</div>
	);
};

export default ButtonWrapper;
