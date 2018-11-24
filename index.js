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

server.listen(port, host, () =>
	console.log(`Sever ${host} is serving at port ${port}`)
);
