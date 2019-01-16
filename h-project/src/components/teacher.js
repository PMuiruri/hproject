import React, { Component } from 'react';
import TableHead from './tableHead';
import TableRow from './tableRow';
import './styles/home.css';
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
			<div style={{ width:"900px"}}>
			<center><h1> Welcome {name}</h1></center>
				<Form handleAddSubmit={this.handleAddSubmit}  />
				<div>
					<Sidebar imageURL={this.state.image}/>
				<table>
					<TableHead />
						{rows}
				</table>
				</div>
			</div>
		);
	}

}

export default Teacher;
