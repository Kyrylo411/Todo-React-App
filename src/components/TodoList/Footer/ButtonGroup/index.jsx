import React, { Component } from 'react';

import Button from '../../../Button';
import './ButtonGroup.scss';

class ButtonGroup extends Component {
	render() {
		return (
			<div className="buttonGroup">
				{this.props.filters.map((btn) => {
					return (
						<Button
							value={btn.filter}
							key={btn.filter}
							active={btn.active}
							setActiveFilter={this.props.setActiveFilter}
						/>
					);
				})}
			</div>
		);
	}
}
export default ButtonGroup;
