import React from 'react';

import { buttons } from '../../../constants';
import ButtonWrapper from './ButtonWrapper';
import './ButtonGroup.scss';

function ButtonGroup({ activeFilter, setActiveFilter }) {
	return (
		<div className="buttonGroup">
			{buttons.map((btn) => {
				return (
					<ButtonWrapper
						key={btn}
						item={btn}
						onClick={setActiveFilter}
						active={btn === activeFilter}
					/>
				);
			})}
		</div>
	);
}
export default ButtonGroup;
