'use strict';

const routes = require('express').Router();

const initRoutes = function(storage, sendErrorPage){
	let dataStorage = storage;

	routes.get('/all', (req,res)=>{
		dataStorage.getAll()
			.then(result => res.render('HomeworkList', {result: result}))
			.catch(err => sendErrorPage(res, err.message));
	});

	routes.post('/all', (req,res) =>{
		if(!req.body){
			res.sendStatus(401);
		} else{
			dataStorage.insert(req.body)
				.then(message => sendStatusPage(res, message))
				.catch(err => sendErrorPage(res, err.message));
		}
	});

	routes.get('/allStudents', (req,res)=>{
		dataStorage.getAllStudent()
			.then(result => res.render('HomeworkList', {result: result}))
			.catch(err => sendErrorPage(res, err.message));
	});

	routes.get('/gethomerwork', (req,res)=>
		res.render('gethomerwork', {
			title:'Get',
			header:'Get',
			action:'/gethomerwork'
		})
	);

	routes.post('/gethomerwork', (req,res) =>{
		if(!req.body){
			res.sendStatus(401);
		} else{
			let homeworkId = req.body.homerworkId;
			dataStorage.get(homeworkId)
				.then(homework => res.render('homeworkPage', {homework}))
				.catch(err => sendErrorPage (res, err.message, 'homework Error', 'Oops!'));
		}
	});
	return routes;
};

module.exports = initRoutes;
