import React, { Component } from 'react';

import Button from '../../Button/Button';
import './ButtonGroup.scss';

class ButtonGroup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			//вынести в const, убрать состояние!
			infoButtons: [
				{
					buttonName: 'All',
					active: true,
				},
				{
					buttonName: 'Actice',
					active: false,
				},
				{
					buttonName: 'Completed',
					active: false,
				},
			],
		};
		this.setActiveButton = this.setActiveButton.bind(this);
	}

	setActiveButton(e) {
		this.setState({
			infoButtons: this.state.infoButtons.map((btn) =>
				e.target.textContent === btn.buttonName
					? { ...btn, active: true }
					: { ...btn, active: false },
			),
		});
	}

	render() {
		return (
			<div className="buttonGroup">
				{this.state.infoButtons.map((btn) => {
					return (
						<Button
							value={btn.buttonName}
							key={btn.buttonName}
							active={btn.active} //
							onClick={this.setActiveButton}
							setActiveFilter={this.props.setActiveFilter} //еще передавать активный фильтр и в зависимости от него менять 'active'
						/>
					);
				})}
			</div>
		);
	}
}
export default ButtonGroup;
