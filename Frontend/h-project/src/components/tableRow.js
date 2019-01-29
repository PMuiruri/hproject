import React, { Component } from 'react';
import './styles/row.css';

// Component that renders the teacher and admin table view
class TableRow  extends Component {
	constructor(){
		super();
		this.state ={
			edit: false,
			student:false,
			editIcon: '/images/edit.png',
			deleteIcon: '/images/bin.png',
			saveIcon:'/images/save.png',
			cancelIcon:'/images/close.png'
		}
	}
	//Function to delete a homework with a specific id
	handleDelete = (e) =>{
		e.preventDefault();
		console.log(e.currentTarget.value);
		let id=e.currentTarget.getAttribute('alt');
	//	let id = e.currentTarget.value;
		alert(id+' to be deleted');

		fetch('http://localhost:4000/delete', {
		method: 'post',
		headers: {
			'Accept': 'application/json, text/plain, */*',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({id: id})})
		.then(res => res.json())
		.then(res => {
			this.props.handleDeleteRow(id);
			alert(res)
		})
		.catch((err)=>console.log(err));
	}

	handleEdit= ()=>{
		this.setState({ edit:true})
	}
	handleCancel= ()=>{
		this.setState({ edit:false})
	}
		//Function to save/ create a new homework 
	handleSave=()=>{
	 let change={
		 homeworkId: this.props.data.homeworkId,
		 description: this.description.value,
		 deadline: this.deadline.value,
		 teacherId:this.props.data.teacherId
	 }
	 console.log(change);
	 this.props.handleSave(change);
	 this.handleCancel();
	}
	handleStudent= () =>{
		this.setState({student:true});
	}

	render() {
		/*function to toggle between the different states of the view */
		let row;
		if(this.state.edit === false && this.state.student === false){
		row =
		<tr>
			<td>{this.props.data.homeworkId}</td>
			<td>{this.props.data.description}</td>
			<td>{this.props.data.deadline} </td>
			<td>{this.props.data.teacherId} </td>
			<td> <img src={this.state.editIcon} type="submit" alt="Edit" onClick={this.handleEdit} /></td>
			<td><img src={this.state.deleteIcon}  alt={this.props.data.homeworkId} type="submit" value={this.props.data.homeworkId} onClick={this.handleDelete.bind(this)} /></td>
		</tr>
		}
		else if(this.state.student === true){
			row =
			<tr>
				<td>{this.props.data.homeworkId}</td>
				<td>{this.props.data.description}</td>
				<td>{this.props.data.deadline} </td>
				<td><button className="rowbutton" type="submit" onClick={this.handleEdit}>Done</button></td>
			</tr>
		} else{
			 row =
			 <tr>
				<td>{this.props.data.homeworkId}</td>
				<td><input type="text" name="description" ref={(value)=>{this.description=value}} defaultValue={this.props.data.description} /></td>
				<td><input type="text" name="deadline" ref={(value)=>{this.deadline=value}} defaultValue={this.props.data.deadline} /></td>
				<td>{this.props.data.teacherId}</td>
				<td> <img src={this.state.cancelIcon} type="submit" alt="Cancel" onClick={this.handleCancel} style={{}}/></td>
				<td> <img src={this.state.saveIcon} type="submit" alt="Save" value={this.props.id} onClick={this.handleSave} style={{padding:"2%"}}/></td>
			</tr>
		}

		return (
			<tbody>
			{row}
		</tbody>
		);
	}
}

export default TableRow;
