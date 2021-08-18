import React from 'react';
import './Button.scss';

class Button extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			className: 'button',
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.setState({
		    className: 'active'
		})
		console.log('click'); 
	}
	render() {
		return (
			<div 
				className={this.state.className} 
				onClick={this.handleClick}
			>
				{this.props.value}
			</div>
		);
	}
}
export default Button;


