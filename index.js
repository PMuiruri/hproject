'use strict';

const path = require('path');
const express = require('express');
const http = require('http');

const app = express();
const {port, host, debug} = require('./serverConfig');

const server = http.createServer(app);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

const homeworkStorage = require('./homeworkDb')(debug);
const statushandling =[sendErrorPage, sendStatusPage];

const getroutes = require('./routes/getroute')(homeworkStorage,...statushandling);
const insertroutes = require('./routes/insertroute')(homeworkStorage,...statushandling);
const deleteroutes = require('./routes/deleteroute')(homeworkStorage,...statushandling);
const updatesroutes = require('./routes/updateroutes')(homeworkStorage,...statushandling);

app.use('/', getroutes);
app.use('/', insertroutes);
app.use('/', deleteroutes);
app.use('/', updatesroutes);

app.get('/', (req,res) => res.sendFile(path.join(__dirname,'index.html')));

server.listen(port, host, () =>
	console.log(`Sever ${host} is serving at port ${port}`)
);

function sendErrorPage(res, message='Error', title='Error', header='Error') {
	sendStatusPage(res, message, title,header);
}

function sendStatusPage(res, message='Status', title='Status', header='Status'){
	return res.render('statusPage',{title:title,header:header,message:message});
}
