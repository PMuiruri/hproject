import React, { Component } from 'react';
import './styles/home.css'
import {Link} from 'react-router-dom';

class Home extends Component {

	render() {
		return (
			<center>
			<p className="typewriter">Hi my name is homework bot and I am here to help you with your homework </p>
			<div className="bot-img"></div>
			<br />
			<Link to="/login">
					<div className="selection" >Login</div>
			</Link>

			</center>
		);
	}

}

export default Home;
