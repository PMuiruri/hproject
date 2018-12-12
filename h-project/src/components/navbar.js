import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import Home from './home';
import HomeworkList from './homework';


class Navbar extends Component {

	render() {
		return (
			<Router>
				<div>
					<ul>
						<li><Link to="/">Homework</Link></li>
						<li><Link to="/students">Students</Link></li>
						<li><Link to="/homework">Homework</Link></li>
					</ul>
					<hr />
					<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/students" component={Home} />
					<Route path="/homework" component={HomeworkList} />
					</Switch>
				</div>
			</Router>
		);
	}

}

export default Navbar;
