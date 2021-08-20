import React, { Component } from 'react';

import './UnderLines.scss';

class UnderLines extends Component {
	render() {
		return (
			<div className={this.props.visible ? 'underLines' : 'underLinesHide'}>
				<div className="firstLine" />
				<div className="secondLine" />
			</div>
		);
	}
}
export default UnderLines;
