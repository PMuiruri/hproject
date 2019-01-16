import React, { Component } from 'react';

import './styles/login.css'

class Login extends Component {

	render() {
		return (
			<center>
			<form style={{border: 'none'}}>
			<div className="login">
			<h1>Login</h1>
			<div className="inputDiv">
				<input id="role" type="text" name="role" value="" placeholder="Select a Role" />
			</div>
			<div className="inputDiv">
				<input id="user" type="text" name="username" value="" placeholder="user" />
			</div>

			<div className="inputDiv">
				<input id="password" type="password" class="form-control" name="password" placeholder="password" />
			</div>

			<div>
					<button type="submit">Log in</button>
			</div>

			<div>
				<label>
					<input type="checkbox" checked="checked" name="remember" /> Remember me
				</label>
				<div>Forgot Username/Password?</div>
			</div>
			</div>
			</form>
			</center>
		);
	}

}

export default Login;
