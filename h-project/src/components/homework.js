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
		let data = this.state.data;
		let homework = {
			homeworkId: parseInt(e.target.homeworkId.value),
			description: e.target.description.value,
			deadline: e.target.deadline.value,
			groupId: "null",
			teacherId: e.target.teacherId.value
		}
		data.push(homework);

	fetch('http://localhost:4000/insert', {
  method: 'post',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(homework)})
	.then(res => res.json())
  .then(res => alert(res))
	.catch((err)=>console.log(err));

	this.setState({data: data})

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
			return <TableRow key={person.id} data={person} />
		});

		return (
			<div className="container">
			<h1>Homework listing</h1>
			<Form handleSubmit={this.handleSubmit} />
			<table id="table">
				<TableHead />
					<tbody>{rows}</tbody>
			</table>
			</div>
		);
	}

}

export default HomeworkList;
