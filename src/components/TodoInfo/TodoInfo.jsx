import React, { Component } from 'react';

import ButtonGroup from '../ButtonGroup/ButtonGroup.jsx';
import './TodoInfo.scss';

export default class TodoInfo extends Component {
	render() {
		return (
			<div className={this.props.visible ? 'todoInfo' : 'todoInfoHide'}>
				<ButtonGroup />
			</div>
		);
	}
}
