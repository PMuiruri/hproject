import React, { Component } from 'react';

class TableRow  extends Component {

	render() {
		return (
			<tr>
			<td> {this.props.data.homeworkId}</td>
			<td> {this.props.data.description}</td>
			<td> {this.props.data.deadline}</td>
			<td> {this.props.data.teacherId}</td>
			</tr>
		);
	}

}

export default TableRow;
