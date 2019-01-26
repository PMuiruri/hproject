'use strict';

//include Express Router
const routes = require('express').Router();

module.exports = (dataStorage, sendErrorPage, sendStatusPage) =>{

	// routes.get('/updateform', (req, res)=>{
	// 	res.render('homeworkInput', {
	// 		title:'Update homework',
	// 		header:'Update homework Data',
	// 		action:'/updatedata',
	// 		homeworkId:{value:'', readonly:''},
	// 		description: {value:'', readonly:'readonly'},
	// 		deadline: {value:'', readonly:'readonly'},
	// 		groupId: {value:'', readonly:'readonly'},
	// 		teacherId: {value:'', readonly:'readonly'}
	// 	});
	// });
	//
	// routes.post('/updatedata', async (req,res) =>{
	// 	try{
	// 		let homework = await dataStorage.get(req.body.homeworkId);
	// 		res.render('form', {
	// 			title:'Update homework',
	// 			header:'Update homework Data',
	// 			action:'/updatehomework',
	// 			homeworkId: {value:homework.homeworkId, readonly:'readonly'},
	// 			description: {value:homework.description, readonly:''},
	// 			deadline: {value:homework.deadline, readonly:''},
	// 			groupId: {value:homework.groupId, readonly:''},
	// 			teacherId: {value:homework.teacherId, readonly:''}
	// 		});
	// 	}
	// 	catch(err){
	// 		sendErrorPage(res, err.message);
	// 	}
	// });

	routes.post('/update', (req, res)=>{
		if(!req.body){
			res.sendStatus(500);
		} else{
			dataStorage.update(req.body)
				.then(message => res.send(JSON.stringify(message)))
				.catch(err => {res.send(err)});
		}
	});
	return routes;
};
