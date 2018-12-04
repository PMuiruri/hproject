'use strict';

const routes = require('express').Router();

module.exports=(dataStorage, sendErrorPage, sendStatusPage)=>{
	routes.get('/deletehomework', (req,res)=>
		res.render('gethomework',{title:'Remove', header:'Remove', action:'/deletehomework'})
	);

	routes.post('/deletehomework', (req,res)=>{
		if(!req.body || !req.body.homeworkId) {
			return res.sendStatus(500);
		} else{
			dataStorage.delete(req.body.homeworkId)
				.then(message => sendStatusPage(res, message))
				.catch(err => sendErrorPage(res, err.message));
		}
	});
	return routes;
}
