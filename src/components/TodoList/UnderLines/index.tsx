import React, { FC } from 'react';
import './UnderLines.scss';

interface UnderLinesProps {
	visible: number;
}

const UnderLines: FC<UnderLinesProps> = ({ visible }) => {
	return visible ? (
		<div className="underLines">
			<div className="firstLine" />
			<div className="secondLine" />
		</div>
	) : null;
};
export default UnderLines;
