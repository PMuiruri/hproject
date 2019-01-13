import React, { Component } from 'react';
import './home.css';

class Form extends Component {
constructor(){
	super()
	this.state={
		teacher:false,
		student:false,
		parent:false
	}
}
	render() {

		return (
			<form onSubmit={this.props.handleAddSubmit} >
			<span>
				<label>Description: <input type="text" name="description" value={this.props.description} onChange={this.props.handleChange} /></label>
				<label>Deadline: <input type="text" name="deadline" value={this.props.deadline} onChange={this.props.handleChange}/></label>
				<label>teacherId: <input type="text" name="teacherId" value={this.props.teacherId} onChange={this.props.handleChange}/></label>
				<button className="rowbutton" type="submit">New </button>
				<button className="rowbutton" type="submit">Search </button>
			</span>
			</form>
		);
	}

}

export default Form;
