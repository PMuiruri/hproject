import React, { Component } from 'react';

class TableHead extends Component{
	constructor(){
		super();
		this.state={
			student:false,
			teacher:false,
		}
	}
	render(){
		let row;
		if(this.state.student === true){
			row =
			<tr>
				<td>Homework Id</td>
				<td>Description</td>
				<td>Deadline</td>
				<td>Status</td>
			</tr>
		} else{
			row=
			<tr>
				<td>Homework Id</td>
				<td>Description</td>
				<td>Deadline</td>
				<td>Teacher Id</td>
			</tr>
		}
		return(
				<thead>
				{row}
				</thead>
		);
	}
}

export default TableHead;
