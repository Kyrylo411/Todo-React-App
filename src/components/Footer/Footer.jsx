import React, { Component } from 'react';

import ClearButton from './ClearButton/ClearButton.jsx';
import ButtonGroup from './ButtonGroup/ButtonGroup.jsx';
import './Footer.scss';

class Footer extends Component {
	constructor(props) {
		super(props);
		this.countItems = this.countItems.bind(this);
	}

	countItems() {
		const notCheckeditems = this.props.todoItemList.filter(
			(item) => item.done === false,
		);
		if (!this.props.todoItemList.length) {
			return;
		} //упростить блок if
		let count = `${notCheckeditems.length} item left`;
		if (notCheckeditems.length > 1 || notCheckeditems.length === 0) {
			count = `${notCheckeditems.length} items left`;
		}
		return count;
	}
	render() {
		return (
			// вместо изменения класса поставить render или render null, и так во всех компонентах
			<div className={this.props.todoItemList.length ? 'footer' : 'footerHide'}>
				<p>{this.countItems()}</p>
				<ButtonGroup setActiveFilter={this.props.setActiveFilter} />
				<ClearButton
					onClearCompleted={this.props.onClearCompleted}
					todoItemList={this.props.todoItemList}
				/>
			</div>
		);
	}
}

export default Footer;
