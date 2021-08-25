import React, { Component } from 'react';
import ArrowButton from './ArrowButton';
import Input from './Input';

import './Header.scss';

class Header extends Component {
	render() {
		return (
			<div className="inputContainer">
				<ArrowButton
					onClick={this.props.toggleAllItems}
					todoItemList={this.props.todoItemList}
				/>
				<Input
					onKeyDown={this.props.addListItem}
					onChange={this.props.changeInputValue}
					value={this.props.value}
					todoItemList={this.props.todoItemList}
				/>
			</div>
		);
	}
}

export default Header;
