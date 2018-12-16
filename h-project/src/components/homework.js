import React, { Component } from 'react';
import './homework.css'
import TableHead from './tableHead';
import TableRow from './tableRow';
import Form from './form';

class HomeworkList extends Component {
	constructor(){
		super();
		this.state={
			data: []
		}
	}

	fetchData =()=>{
		fetch('http://localhost:4000/all')
			.then(response => response.json())
			.then(data => this.setState({ data: data }))
			.catch(err => console.log(err));
	}

	handleSubmit = (e) => {

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

	 const result = array.filter(item => item.homeworkId !== 1)
			alert(result);
			this.setState({data:result})
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
		let rows = this.state.data.map(person =>{
			return <TableRow key={person.id} data={person} handleDeleteRow ={this.handleDeleteRow} handleSave={this.handleSave} />
		});

		return (
			<div className="container">
			<h1>Homework listing</h1>
			<Form handleSubmit={this.handleSubmit} />
			<table id="table">
				<TableHead />
					{rows}
			</table>
			</div>
		);
	}

}

export default HomeworkList;
