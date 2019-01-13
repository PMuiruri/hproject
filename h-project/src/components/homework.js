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
			image:"/images/bot3.png"
		}
	}

	fetchData =()=>{
		fetch('http://localhost:4000/all')
			.then(response => response.json())
			.then(data => this.setState({ data: data }))
			.catch(err => console.log(err));
	}

	handleAddSubmit = (e) => {
		e.preventDefault();
		let data = this.state.data;
		let homework = {
			description: e.target.description.value,
			deadline: e.target.deadline.value,
			groupId: "null",
			teacherId: e.target.teacherId.value
		}

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
		this.setState({data:data})
	})
	.catch((err)=>console.log(err));
}

componentDidMount() {
  	this.fetchData();
  }

 handleDeleteRow = (id) =>{
	 let array = this.state.data;
	 let deleteId = parseInt(id);


	 const result = array.filter(item => item.homeworkId !== deleteId)
			this.setState({data:result})
			console.log(result)
 }
handleSave = (save) =>{
	let update = this.state.data;
	let index = update.findIndex(x=> x.homeworkId === save.homeworkId);
console.log(index);
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
			<h1>Homework listing</h1>
			<Sidebar imageURL={this.state.image}/>
			<div>
			<Form handleAddSubmit={this.handleAddSubmit} />
			<table id="table">
				<TableHead />
					{rows}
			</table>
			</div>
			</div>
		);
	}

}

export default HomeworkList;
