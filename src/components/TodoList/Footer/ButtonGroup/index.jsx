import React, { Component } from 'react';

import { buttons } from '../../../constants';
import ButtonWrapper from './ButtonWrapper';
import './ButtonGroup.scss';

class ButtonGroup extends Component {
	render() {
		return (
			<div className="buttonGroup">
				{buttons.map((btn) => {
					return (
						<ButtonWrapper
							key={btn}
							item={btn}
							onClick={this.props.setActiveFilter}
							active={btn === this.props.activeFilter}
						/>
					);
				})}
			</div>
		);
	}
}
export default ButtonGroup;
