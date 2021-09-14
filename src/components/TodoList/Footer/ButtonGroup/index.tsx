import React, { FC } from 'react';

import buttons from '../../../../constants/constants';
import ButtonWrapper from './ButtonWrapper';
import './ButtonGroup.scss';

interface Props {
	activeFilter: string;
	setActiveFilter: (textValue: string) => void;
}

const ButtonGroup: FC<Props> = ({ activeFilter, setActiveFilter }) => {
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
