import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//Component for navigation bar
class Navbar extends Component {

	render() {
		return (

				<div>
					<ul style={{paddingBottom:"1%",borderBottom: "3px solid #3B385C"}}>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/students">Students</Link></li>
						<li><Link to="/parents">Parents</Link></li>
						<li><Link to="/teachers">Teachers</Link></li>
						<li><Link to="/admin">Admin</Link></li>
					</ul>
				</div>

		);
	}

}

export default Navbar;
