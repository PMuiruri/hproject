import React, { Component } from 'react';
import TableHead from './tableHead';
import TableRow from './studentRow';
import './styles/home.css';
import Sidebar from './sidebar'

class Student extends Component {
	constructor(){
		super();
		this.state={
			data:[],
			student: true,
			image:"/images/bot5.png"
		}
	}
	getStudent= ()=>{
	let studentId ={studentId:1};
	fetch('http://localhost:4000/getstudent/', {
  method: 'post',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(studentId)})
	.then(response => response.json())
	.then(data =>{
		this.setState({data: data,
		student:true})
		console.log(data)
		})
	.catch((err)=>console.log(err));

}
	componentDidMount() {
	  	this.getStudent();
	  }

	render() {
		let rows = this.state.data.map((person,index) =>{
			return <TableRow key={index} data={person} onStudent={this.state.student}/>
		});
		let name = !this.state.data[0] ? '...Loading' : this.state.data[0].firstname;

		console.log( !this.state.data[0] ? 'empty' : this.state.data[0].firstname);
		return (
			<div>
			<center><h1> Welcome {name}</h1></center>
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

export default Student;
