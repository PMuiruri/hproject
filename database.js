'use strict';
//include the package
const mysql = require('mysql');


//database class definitions

module.exports= class Database{
    constructor(options, debug=false){ //debugging option, by default disabled
        this.options = options;
        this.debug = debug;
    }

    doQuery(sql,...parameters){
        return new Promise((resolve, reject) =>{
            let connection = mysql.createConnection(this.options);  //create a new conn instance
            let sqlStatement = connection.query(sql, [...parameters], (err, result)=>{
                if(this.debug){
                    /*eslint-disable no-console*/
                    console.log(sqlStatement.sql);
                }
                if(err) {
                    reject(new Error('SQL ERROR: '+err));
                }
                resolve(result);
            });

            //terminate the connection
            connection.end();
        });
    }
};
