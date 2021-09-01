import React, { FC } from 'react';

import buttons from '../../../constants';
import ButtonWrapper from './ButtonWrapper';
import './ButtonGroup.scss';

interface ButtonGroupProps {
	activeFilter: string;
	setActiveFilter: (textValue: string) => void;
}

const ButtonGroup: FC<ButtonGroupProps> = ({
	activeFilter,
	setActiveFilter,
}) => {
	return (
		<div className="buttonGroup">
			{buttons.map((btn: string) => {
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
};
export default ButtonGroup;
