import React, { Component } from 'react';
import TableHead from './tableHead';
import TableRow from './tableRow';
import Form from './form';
import Sidebar from './sidebar';

class HomeworkList extends Component {
	constructor(){
		super();
		this.state={
			data: [],
			image:"/images/bot6.png"
		}
	}
//Fetch call to get all homework available
	fetchData =()=>{
		fetch('http://localhost:4000/all')
			.then(response => response.json())
			.then(data => this.setState({ data: data }))
			.catch(err => console.log(err));
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
		this.setState({data:data});
	})
	.catch((err)=>console.log(err));
}
//First call to render page data
componentDidMount() {
  	this.fetchData();
  }
//Function to delete a single row
 handleDeleteRow = (id) =>{
	 let array = this.state.data;
	 let deleteId = parseInt(id);

	 const result = array.filter(item => item.homeworkId !== deleteId)
			this.setState({data:result})
			console.log(result)
 }
 //Function to save any new changes
handleSave = (save) =>{
	let update = this.state.data;
	let index = update.findIndex(x=> x.homeworkId === save.homeworkId);
console.log(index);
	//Fetch call to save data to database
	fetch('http://localhost:4000/update', {
  method: 'post',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(save)})
	.then(res => res.json())
  .then(res =>{
		console.log(index);
		update[index]= save;
		console.log(update);
		this.setState({data: update});
		alert(res);
	})
	.catch((err)=>console.log(err));
}
	render() {
		let rows = this.state.data.map((person, index) =>{
			return <TableRow key={index} data={person} handleDeleteRow ={this.handleDeleteRow} handleSave={this.handleSave} />
		});

		return (
			<div className="container">
			<Form handleAddSubmit={this.handleAddSubmit} />
			<div className="grid-2">
			<table style={{gridColumn:" 1 / span 2"}}>
				<TableHead />
					{rows}
			</table>
			<Sidebar imageURL={this.state.image} style={{gridColumn:"3 / span 1"}}/>
			</div>
			</div>
		);
	}

}

export default HomeworkList;
