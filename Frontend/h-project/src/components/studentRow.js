import React, { Component } from 'react';
import './styles/row.css';
import Icon from './icon';

// Component to render the student view
class TableRow  extends Component {
	constructor(){
		super();
		this.state ={
			complete: false,
			save: false,
			saveIcon:'/images/save.png',
			cancelIcon:'/images/close.png'
		}
	}
	handleComplete= ()=>{
		this.setState({ complete:true})
	}
	handleCancel= ()=>{
		this.setState({ complete:false})
	}
	handleSave=()=>{
	 this.setState({ save:true})
	}

	render() {
		//function to toggle between the different table views / states
		let row;
		if(this.state.complete === false){
		row =
		<tr>
		<td>{this.props.data.homeworkId}</td>
		<td>{this.props.data.description}</td>
		<td>{this.props.data.deadline} </td>
		<td>{this.props.data.teacherId} </td>
		<td><button className="rowbutton" type="submit" onClick={this.handleComplete}>Complete</button></td>
		</tr>
		}
		else if(this.state.save === true){
			row =
				<tr>
					<td>{this.props.data.homeworkId}</td>
					<td>{this.props.data.description}</td>
					<td>{this.props.data.deadline}</td>
					<td>{this.props.data.teacherId}</td>
					<td>{<Icon imageURL={"/images/icon3.png"}/>}</td>
				</tr>
			}
		else{
			row =
				<tr>
					<td>{this.props.data.homeworkId}</td>
					<td>{this.props.data.description}</td>
					<td>{this.props.data.deadline}</td>
					<td>{this.props.data.teacherId}</td>
					<td><button className="rowbutton" type="submit" onClick={this.handleCancel} >Cancel</button></td>
					<td><button className="rowbutton" type="submit" onClick={this.handleSave} value={this.props.id}>Save</button></td>
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
