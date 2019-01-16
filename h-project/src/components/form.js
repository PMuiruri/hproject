import React, { Component } from 'react';
import './styles/home.css';


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
		//Component that creates a new form
		return (
			<form onSubmit={this.props.handleAddSubmit} >
			<span>
				<input type="text" placeholder="Description" name="description" value={this.props.description} onChange={this.props.handleChange} />
				<input type="text" placeholder="Deadline" name="deadline" value={this.props.deadline} onChange={this.props.handleChange}/>
				<input type="text" placeholder="Teacher Id" name="teacherId" value={this.props.teacherId} onChange={this.props.handleChange}/>
				<button className="rowbutton" type="submit">New </button>
				<button className="rowbutton" type="submit">Search </button>
				</span>
			</form>
		);
	}

}

export default Form;
