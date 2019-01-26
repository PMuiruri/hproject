'use strict';

//include Express Router
const routes = require('express').Router();

const initRoutes = function(storage, sendErrorPage){
    let dataStorage = storage;

// ALL the routes sending a GET or POST-request (within the app) need to be listed here

/*
.get = gives the response specified in the function:
takes in 2 args: (1) the url (2) the function telling express what to send back
 */
	routes.get('/all', (req,res)=>{
		dataStorage.getAll() //getAll -function is defined in the homeworkDb.js
		//stringify-method converts JavaScript objects into strings (for sending data to a web server the data has to be a string)
			.then(result => res.send(JSON.stringify(result)))
			.catch(err => res.send(res, err.message));
	});

	routes.get('/allStudents', (req,res)=>{
		dataStorage.getAllStudent()  //getAllStudent -function is defined in the homeworkDb.js
      .then(result => res.send(JSON.stringify(result)))
			.catch(err => res.send(res, err.message));
			console.log(result);
	});

	routes.get('/gethomework', (req,res)=>
		res.render('gethomework', {  //render gethomework.ejs page
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
				.catch(err => res.send (res, err.message, 'homework Error', 'Oops!'));
		}
	});

	routes.post('/getteacher', (req,res) =>{
		if(!req.body){
			res.sendStatus(401);
		} else{
			let teacherId = req.body.teacherId;
			dataStorage.getTeacher(teacherId)
			.then(result => res.send(JSON.stringify(result)))
			.catch(err => res.send(res, err.message));
		}
	});

routes.post('/getstudent', (req,res) =>{
	if(!req.body){
		res.sendStatus(401);
	} else{
		let studentId = req.body.studentId;
		dataStorage.getStudent(studentId)
		.then(result => res.send(JSON.stringify(result)))
		.catch(err => res.send(res, err.message));
	}
});
	return routes;
};

module.exports = initRoutes;
