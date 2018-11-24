'use strict';
/*eslint-disable no-console*/
const Database = require('./database');
const sqlStatement = require('./sqlStatements');

const customerdb = new Database({
    "host":"localhost",
		"port": "3306",
    "user": "robot",
    "password": "secret",
    'database': "homeworkdatabase"
}, true);

const allSql=sqlStatement.getAllhomeworkSql.join(' ');

customerdb.doQuery(allSql)
	.then(result =>console.log(result))
	.catch(err =>console.log(err.message));
