import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import Home from './home';
import HomeworkList from './homework';
import Student from './student';


class Navbar extends Component {

	render() {
		return (
			<Router>
				<div>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/students">Students</Link></li>
						<li><Link to="/parents">Parents</Link></li>
						<li><Link to="/teachers">Teachers</Link></li>
						<li><Link to="/admin">Homework</Link></li>
					</ul>
					<hr />
					<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/students" component={Student} />
					<Route path="/parents" component={Home} />
					<Route path="/teachers" component={Home} />
					<Route path="/admin" component={HomeworkList} />
					</Switch>
				</div>
			</Router>
		);
	}

}

export default Navbar;
