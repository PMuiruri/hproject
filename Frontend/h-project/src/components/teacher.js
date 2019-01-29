import React, { Component } from 'react';
import TableHead from './tableHead';
import TableRow from './tableRow';
import Sidebar from './sidebar';
import Form from './form';

class Teacher extends Component {
	constructor(){
		super();
		this.state={
			data: [],
			image:"/images/bot5.png"
		}
	}
	// Function to get own teacher's homeworks
	getteacher= ()=>{
	let teacherId ={teacherId:1};
	fetch('http://localhost:4000/getteacher/', {
  method: 'post',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(teacherId)})
	.then(response => response.json())
	.then(data =>{
		this.setState({data: data})
		console.log(data)
		})
	.catch((err)=>console.log(err));

}
//Function to add a new homework
	handleAddSubmit = (e) => {
		e.preventDefault();
		let data = this.state.data;
		let homework = {
			description: e.target.description.value,
			deadline: e.target.deadline.value,
			groupId: e.target.groupId.value,
			teacherId: e.target.teacherId.value
		}
	//Fetch call to add/insert new homework to database
	fetch('http://localhost:4000/insert', {
  method: 'post',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(homework)})
	.then(res => res.json())
  .then(res =>{
		homework.homeworkId=res;
		data.push(homework);
		alert(res);
		this.setState({data:data});
	})
	.catch((err)=>console.log(err));
}
	componentDidMount() {
	  	this.getteacher();
	  }

	render() {
		let rows = this.state.data.map((person,index) =>{
			return <TableRow key={index} data={person} />
		});
		let name = !this.state.data[0] ? '...Loading' : this.state.data[0].firstname;

		console.log( !this.state.data[0] ? 'empty' : this.state.data[0].firstname);
		return (
			<div>
			<center><h1> Welcome {name}</h1></center>
				<Form handleAddSubmit={this.handleAddSubmit}  />
				<div className="grid-2">
					<Sidebar imageURL={this.state.image} style={{gridColumn:"1/ span 1"}}/>
				<table style={{gridColumn:"2/ span 2"}}>
					<TableHead />
						{rows}
				</table>
				</div>
			</div>
		);
	}

}

export default Teacher;
