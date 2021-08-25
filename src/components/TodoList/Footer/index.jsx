import React, { Component } from 'react';

import ClearButton from './ClearButton';
import ButtonGroup from './ButtonGroup';
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
		return notCheckeditems.length > 1 || notCheckeditems.length === 0
			? `${notCheckeditems.length} items left`
			: `${notCheckeditems.length} item left`;
	}
	render() {
		return this.props.todoItemList.length ? (
			<div className="footer">
				<p>{this.countItems()}</p>
				<ButtonGroup
					setActiveFilter={this.props.setActiveFilter}
					activeFilter={this.props.activeFilter}
				/>
				<ClearButton
					onClick={this.props.deleteCompletedItems}
					todoItemList={this.props.todoItemList}
				/>
			</div>
		) : null;
	}
}
export default Footer;
