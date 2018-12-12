import React, { Component } from 'react';

class TableHead extends Component{
	render(){
		return(
				<thead>
				<tr>
					<td>Homework Id</td>
					<td>Description</td>
					<td>Deadline</td>
					<td>Teacher Id</td>
				</tr>

				</thead>
		);
	}
}

export default TableHead;
