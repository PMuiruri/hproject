'use strict';

const routes = require('express').Router();

const initRoutes = function(storage, sendErrorPage){
	let dataStorage = storage;

	routes.get('/all', (req,res)=>{
		dataStorage.getAll()
			.then(result => res.send(JSON.stringify(result)))
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
      .then(result => res.send(JSON.stringify(result)))
			.catch(err => sendErrorPage(res, err.message));
			console.log(result);
	});

	routes.get('/gethomework', (req,res)=>
		res.render('gethomework', {
			title:'Get',
			header:'Get',
			action:'/gethomework'
		})
	);

	routes.post('/gethomework', (req,res) =>{
		if(!req.body){
			res.sendStatus(401);
		} else{
			let homeworkId = req.body.homerworkId;
			dataStorage.get(homeworkId)
				.then(result => res.send(JSON.stringify(result)))
				.catch(err => sendErrorPage (res, err.message, 'homework Error', 'Oops!'));
		}
	});
	return routes;
};

module.exports = initRoutes;
