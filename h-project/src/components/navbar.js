import React, { Component } from 'react';
import {Link} from 'react-router-dom';



class Navbar extends Component {

	render() {
		return (
		
				<div>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/students">Students</Link></li>
						<li><Link to="/parents">Parents</Link></li>
						<li><Link to="/teachers">Teachers</Link></li>
						<li><Link to="/admin">Admin</Link></li>
					</ul>
					<hr />

				</div>

		);
	}

}

export default Navbar;
