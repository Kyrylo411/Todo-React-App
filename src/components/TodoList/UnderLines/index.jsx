import React, { Component } from 'react';

import './UnderLines.scss';

class UnderLines extends Component {
	render() {
		return this.props.visible ? (
			<div className="underLines">
				<div className="firstLine" />
				<div className="secondLine" />
			</div>
		) : null;
	}
}
export default UnderLines;
