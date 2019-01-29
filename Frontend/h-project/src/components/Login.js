import React, { Component } from 'react';
import './styles/login.css'

//component to login to service
class Login extends Component {

	render() {
		return (
			<center>
			<form style={{border: 'none'}}>
				<div className="loginBox">
				<img src="/images/bot6.png" alt="user" className="user" />
				<h2>Login</h2>
				<div>
				<select placeholder="Please select one" >
					<option value="Student">Student</option>
					<option value="Parent">Parent</option>
					<option value="Teacher">Teacher</option>
					<option value="Admin">Admin</option>
				</select>
				</div>
				<div>
					<input className="inputDiv" id="user" type="text" name="username" value="" placeholder="user" autoComplete="off" />
					</div>
				<div>
					<input className="inputDiv" id="password" type="password" name="password" placeholder="password" />
				</div>
				<div>
					<input type="submit" name="" value="Sign In" />
				</div>

			<div>

			<div style={{color: 'white', fontSize: '16px'}}>Forgot Username/Password?</div>
			</div>
			</div>
			</form>
			</center>
		);
	}

}

export default Login;
