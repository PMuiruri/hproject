'use strict';

const routes = require('express').Router();

const initRoutes = function(storage, sendErrorPage, sendStatusPage){
	let dataStorage = storage;

	// routes.get('/insertform', (req,res)=>
	// 	res.render('homeworkInput', {
	// 		title:'Insert',
	// 		header:'Add a new Homework',
	// 		action:'/insert',
	// 		homeworkId:{ value:'', readonly:''},
	// 		description:{ value:'', readonly:''},
	// 		deadline:{ value:'', readonly:''},
	// 		groupId:{ value:'', readonly:''},
	// 		teacherId:{ value:'', readonly:''}
	// 	})
	// );

	routes.post('/insert', (req,res) =>{
		if(!req.body){
			res.sendStatus(401);
		} else{
			dataStorage.insert(req.body)
				.then(message => res.send(JSON.stringify(message)))
				.catch(err => res.send(JSON.stringify(err)));
		}
	});
	return routes;
};

module.exports = initRoutes;
