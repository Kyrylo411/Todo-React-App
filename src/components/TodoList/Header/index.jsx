import React, { Component } from 'react';
import ArrowButton from './ArrowButton';
import Input from './Input';

import './Header.scss';

class Header extends Component {
	render() {
		return (
			<div className="inputContainer">
				<ArrowButton
					toggleAllItems={this.props.toggleAllItems}
					arrowDark={this.props.arrowDark}
					todoItemList={this.props.todoItemList}
				/>
				<Input
					addListItem={this.props.addListItem}
					changeInputValue={this.props.changeInputValue}
					value={this.props.value}
				/>
			</div>
		);
	}
}

export default Header;
