import React, { Component } from 'react';

class TableRow  extends Component {

	handleDelete = (e) =>{
		e.preventDefault();
		console.log(e.target.value);
		let id = e.target.value
		alert(id+' to be deleted');

		fetch('http://localhost:4000/delete', {
		method: 'post',
		headers: {
			'Accept': 'application/json, text/plain, */*',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({id: id})})
		.then(res => res.text())
		.then(res => alert(res))
		.catch((err)=>console.log(err));
	}

	render() {
		return (
			<tr>
			<td > {this.props.data.homeworkId}</td>
			<td> {this.props.data.description}</td>
			<td> {this.props.data.deadline}</td>
			<td> {this.props.data.teacherId}</td>
			<td><button type="submit" onClick={this.handleEdit}>Edit</button></td>
			<td><button type="submit" value ={this.props.data.homeworkId} onClick={this.handleDelete}>Delete</button></td>
			</tr>
		);
	}

}

export default TableRow;
