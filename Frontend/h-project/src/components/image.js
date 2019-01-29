import React, { Component } from 'react';

//Reusable image component
class PageImage extends Component {

	render() {
		return (
			<div>
				<img src={this.props.imageURL} alt="imageBot" style={{width:'220px', height:'310px'}}/>
			</div>
		);
	}

}

export default PageImage;
