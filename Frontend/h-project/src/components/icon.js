import React, { Component } from 'react';

//Reuseable icon component
class Icon extends Component {

	render() {
		return (
			<div>
				<img src={this.props.imageURL} alt="imageBot" style={{width:'48px', height:'48px'}}/>
			</div>
		);
	}

}

export default Icon;
