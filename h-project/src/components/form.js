import React, { Component } from 'react';
import './form.css';

class Form extends Component {

	render() {
		return (
			<form onSubmit={this.props.handleSubmit}>
			<span>
				<label>Homework Id: <input type="text" name="homeworkId" value={this.props.homeworkId} onChange={this.props.handleChange} /></label>
				<label>Description: <input type="text" name="description" value={this.props.description} onChange={this.props.handleChange} /></label>
				<label>Deadline: <input type="text" name="deadline" value={this.props.deadline} onChange={this.props.handleChange}/></label>
				<label>teacherId: <input type="text" name="teacherId" value={this.props.teacherId} onChange={this.props.handleChange}/></label>
				<button type="submit">Add New </button>
			</span>
			</form>
		);
	}

}

export default Form;
