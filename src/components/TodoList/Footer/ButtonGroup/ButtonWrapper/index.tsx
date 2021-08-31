import React from 'react';

import Button from '../../../../Button';

interface ButtonWrapperProps {
	item: string,
	active: boolean,
	onClick: (item:string)=> void,
}

function ButtonWrapper({ item, active, onClick }:ButtonWrapperProps) {
	const handleClick = () => {
		onClick(item);
	};
	return (
		<div>
			<Button active={active} value={item} onClick={handleClick} />
		</div>
	);
}

export default ButtonWrapper;
