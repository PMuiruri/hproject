import React, { Component } from 'react';
import Student from './student';
import './styles/home.css';

// Component that creates parent view
class Parent extends Component {
	constructor(){
		super();
		this.state={
			data:[],
			student: true,
			image:"/images/bot5.png"
		}
	}
	render() {
		return (
			<div>
				<Student />
			</div>
		);
	}

}

export default Parent;
