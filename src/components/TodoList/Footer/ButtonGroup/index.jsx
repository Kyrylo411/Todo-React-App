import React, { Component } from 'react';

import { buttons } from '../../../constants';
import Button from '../../../Button';
import './ButtonGroup.scss';

class ButtonGroup extends Component {
	render() {
		return (
			<div className="buttonGroup">
				{buttons.map((btn) => {
					return (
						<Button
							value={btn.name}
							key={btn.name}
							active={btn.name === this.props.activeFilter}
							onClick={this.props.setActiveFilter}
						/>
					);
				})}
			</div>
		);
	}
}
export default ButtonGroup;
