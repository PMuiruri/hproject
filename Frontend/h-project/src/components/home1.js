import React, { Component } from 'react';
import './styles/home.css'
import {Link} from 'react-router-dom';

class Home extends Component {

	render() {
		return (
			<div className="grid-2">
			<div className="card" style={{gridColumn:"1/ span 3"}}>
			<p className="typewriter" style={{marginTop:"3em", marginLeft:"5em"}}>Hi my name is homework bot</p>
			<p className="typewriter" style={{marginLeft:"3em", marginBottom:"3em"}} >I am here to help you with your homework </p>
			<br/>
			</div>
			<div className="card" style={{gridColumn:"1/ span 2"}}>
			<Link className="login" style={{marginTop:"3em", marginLeft:"5em"}} to="/login">Login</Link></div>
			<div className="card" style={{gridColumn:"3/ span 1"}}>
			<div className="bot-img"></div>
			</div>
			</div>
		);
	}

}

export default Home;
