import React, { Component } from 'react';
import ArrowButton from './ArrowButton/ArrowButton.jsx';
import Input from './Input/Input.jsx';

import './Header.scss';

class Header extends Component {
	render() {
		return (
			<div className="inputContainer">
				<ArrowButton
					onArrowClick={this.props.onArrowClick}
					visible={this.props.visible}
					arrowDark={this.props.arrowDark}
				/>
				<Input
					onKeyDown={this.props.onKeyDown}
					onInputChange={this.props.onInputChange}
					value={this.props.value}
				/>
			</div>
		);
	}
}

export default Header;
