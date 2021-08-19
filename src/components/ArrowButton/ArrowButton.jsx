import React, { Component } from 'react';
import './ArrowButton.scss';

export default class ArrowButton extends Component {
	constructor(props) {
		super(props);
		// this.state = {
		// 	visible: this.props.visible,
		// };
	}
	render() {
		return (
			<div>
				<div className={this.props.visible ? 'arrow arrowVisible' : 'arrow'}>
					❯
				</div>
			</div>
		);
	}
}
