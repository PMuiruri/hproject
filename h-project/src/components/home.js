import React, { Component } from 'react';
import './home.css'
class Home extends Component {

	render() {
		return (

			<center>
			<p className="typewriter">Hi my name is homework bot and I am here to help you with your homework </p>
			<div className="bot-img"></div>
			<p>Please select one</p>
			<br />
			<div>
				<span className='selection'>Student</span>
				<span className='selection'>Parent</span>
				<span className='selection'>Teacher</span>
			</div>
			</center>
		);
	}

}

export default Home;
