import React from 'react';
import './UnderLines.scss';

function UnderLines({ visible }) {
	return visible ? (
		<div className="underLines">
			<div className="firstLine" />
			<div className="secondLine" />
		</div>
	) : null;
}
export default UnderLines;
