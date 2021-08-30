import React from 'react';

import Button from '../../../../Button';

function ButtonWrapper({ item, active, onClick }) {
	const handleClick = () => {
		onClick(item);
	};
	return (
		<div>
			<Button value={item} active={active} onClick={handleClick} />
		</div>
	);
}

export default ButtonWrapper;
