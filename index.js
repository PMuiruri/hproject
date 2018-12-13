'use strict';

const path = require('path');
const express = require('express');
const http = require('http');
const cors = require('cors');

const app = express();
const {port, host, debug} = require('./serverConfig');

const server = http.createServer(app);
app.use(cors());
app.use(express.json());

// Website you wish to allow to connect
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');  // Request methods you wish to allow

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');  // Request headers you wish to allow

    res.header('Access-Control-Allow-Headers', 'Origin,Content-Type, Authorization, x-id, Content-Length, X-Requested-With');


    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');  // Set to true if you need the website to include cookies in the requests sent

    // to the API (e.g. in case you use sessions)

    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware

    next();

});

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

server.listen(port, host, () =>
	console.log(`Sever ${host} is serving at port ${port}`)
);

function sendErrorPage(res, message='Error', title='Error', header='Error') {
	sendStatusPage(res, message, title,header);
}

function sendStatusPage(res, message='Status', title='Status', header='Status'){
	return res.render('statusPage',{title:title,header:header,message:message});
}
