'use strict';

const routes = require('express').Router();

module.exports=(dataStorage, sendErrorPage, sendStatusPage)=>{
	// routes.get('/delete', (req,res)=>
	// 	res.render('gethomework',{title:'Remove', header:'Remove', action:'/delete'})
	// );

	routes.post('/delete/', (req,res)=>{

		if(!req.body || !req.body.id) {
			return res.sendStatus(500);
		} else{
			dataStorage.delete(req.body.id)
			.then(message => res.send(JSON.stringify(message)))
			.catch(err => res.send(JSON.stringify(err)));
		}
	});
	return routes;
}
