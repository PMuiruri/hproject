import React, { Component } from 'react';

class PageImage extends Component {

	render() {
		return (
			<div>
				<img src={this.props.imageURL} alt="imageBot" style={{width:'220px', height:'310px', float:'left'}}/>
			</div>
		);
	}

}

export default PageImage;
