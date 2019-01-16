import React, { Component } from 'react';
import './styles/sidebar.css';
import PageImage from './image';

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
