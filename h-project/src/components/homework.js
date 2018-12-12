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
	handleSubmit = (e) => {

		e.preventDefault();
		let homework ={ homeworkId:e.target.homeworkId.value, description:e.target.description.value, deadline: e.target.deadline.value, teacherId:e.target.teacherId}
		this.state.data.push(homework);
		console.log(homework);

		fetch('http://localhost:4000/insert', {
						 method: 'POST',
						 headers : {"Content-Type":"application/json"},
						 body: '{"test: "Test"}'
					 })
				 .then((res) => res.json())
				 .then((data) =>  console.log(data))
				 .catch((err)=>console.log(err))
	}

fetchData =()=>{
	fetch('http://localhost:4000/all')
		.then(response => response.json())
		.then(data => this.setState({ data: data }))
		.catch(err => console.log(err));
}

  componentDidMount() {
  	this.fetchData();
  }


	render() {
		let rows = this.state.data.map(person =>{
			return <TableRow key={person.id} data ={person} />
		});
		return (
			<div className="container">
			<h1>Homework listing</h1>
			<Form handleSubmit={this.handleSubmit} />
			<table id="table">
			<table>
				<TableHead />
					<tbody>{rows}</tbody>
			</table>
			</table>
			</div>
		);
	}

}

export default HomeworkList;
