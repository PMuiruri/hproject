import React, { Component } from 'react';
import './styles/home.css';
import PageImage from './image';

//Component that create sidebar image
class Sidebar extends Component {

	render() {
		return (
			<div className="sidebar">
				<PageImage imageURL={this.props.imageURL} />
			</div>
		);
	}
}

export default Sidebar;
