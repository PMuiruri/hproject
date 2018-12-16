'use strict';
/* eslint-disable no-console*/

const Database= require('./database');
const sqlStatements= require('./sqlStatements');
const options=require('./options');


const allSql=sqlStatements.getAllhomeworkSql.join(' ');
const homeworkSql=sqlStatements.gethomeworkSql.join(' ');
const insertSql=sqlStatements.inserthomeworkSql.join(' ');
const deleteSql=sqlStatements.deletehomeworkSql.join(' ');
const updateSql=sqlStatements.updatehomeworkSql.join(' ');
const getAllStudentSql=sqlStatements.getAllstudentHomeworkSql.join(' ');



class homeworkDatabase{
	constructor(options, debug=false){
		this.homeworkDb=new Database(options, debug);
	}

	getAll(){
		return new Promise(async (resolve, reject)=>{
			try{
				let result= await this.homeworkDb.doQuery(allSql);
				resolve(result);

			}
			catch(err){
				reject(fatalError(err));
			}
		});
	}

	getAllStudent(){
		return new Promise(async (resolve, reject)=>{
			try{
				console.log(getAllStudentSql);
				let result= await this.homeworkDb.doQuery(getAllStudentSql);
				console.log(result);
				resolve(result);

			}
			catch(err){
				reject(fatalError());
			}
		});
	}

	gethomework(homeworkId){
		return new Promise(async (resolve, reject)=>{
			try{
				let result= await this.homeworkDb.doQuery(homeworkSql, +homeworkId);
				if(result.length===0){
					reject(new Error(' unknown'));
				} else{
					resolve(result[0]);
				}
			}
			catch(err){
				reject(fatalError(err));
			}
		});
	}

	insert(homework){
		return new Promise(async (resolve,reject)=>{
			try{
				let result = await this.homeworkDb.doQuery(insertSql,
					homework.description,
					homework.deadline,
					homework.groupId,
					homework.teacherId
				);

				console.log(result);
				if(result.affectedRows===0){
					reject(new Error('No homework was added'));
					console.log(result)
				} else{
					resolve(result.insertId);

					console.log('Done');
				}
			}
			catch(err){
				console.log('erroorr')
				reject(fatalError(err));
			}
		});
	}
	// function to update a homeworks information
	update(homework){
		return new Promise(async (resolve,reject)=>{
			try{
				let result = await this.homeworkDb.doQuery(updateSql, homework.description, homework.deadline, homework.teacherId, +homework.homeworkId);
				if(result.affectedRows===0){
					reject(new Error(`No homework with id ${homework.homeworkdata} was found. No data was updated`));
				} else{
					resolve(`homework with id ${homework.homeworkId} was updated`);
				}
			}
			catch(err){
				reject(fatalError(err));
			}
		});
	}
	//function to delete a homework
	delete(homeworkId){
		return new Promise(async (resolve, reject) =>{
			try{
				let result = await this.homeworkDb.doQuery(deleteSql, +homeworkId);
				console.log(result);
				if(result.affectedRows===0){
					reject(new Error(`No homework with given Id ${homeworkId}. Nothing was deleted`));
				} else{
					resolve(`homework with id ${homeworkId} was deleted`);
				}
			}
			catch(err){
				reject(fatalError(err));
			}
		});
	}
}//end of class

module.exports=function initDataStorage(debug=false){
	return new homeworkDatabase(options, debug);
};

function fatalError(err){
	return new Error(`Sorry! Error in our program. ${err.message}`);
}
