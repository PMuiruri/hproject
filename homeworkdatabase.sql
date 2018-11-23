drop database if exists homeworkdatabase;
create database homeworkdatabase;
use homeworkdatabase;

create table student (
	studentId int not null primary key AUTO_INCREMENT,
	firstname varchar(20) not null,
	lastname varchar (20) not null,
	groupId varchar (15)
	);

create table homework (
	homeworkId int not null primary key AUTO_INCREMENT,
	description varchar (20) not null,
	deadline varchar (15),
	groupId varchar(15),
	teacherId integer not null
);
create table homeworkStatus (
	statusId int not null primary key AUTO_INCREMENT,
	homeworkId integer not null,
	studentId integer not null,
	status binary
);

insert into student values( 1,'Leila', 'Hökki', '2A');
insert into student values( 2,'Matt', 'River', '2B');
insert into student values( 3,'Adam', 'Antila', '2A');

insert into homework values(1, 'Math Ex 3 ch 4','11.2.2018','2A',1);
insert into homework values(2,'English Comprehension pg 13','11.3.2018', '2B', 2);
insert into homework values(3,'Math Ex4 Ch 4', '11.4.2018','2A', 1);

insert into homeworkStatus values(1, 1, 1, false);
insert into homeworkStatus values(2, 1, 3, true);
insert into homeworkStatus values(3, 2, 2 , false);


drop user if exists 'robot'@'localhost';
create user if not exists 'robot'@'localhost' identified by 'secret';
grant all privileges on homeworkdatabase.* to 'robot'@'localhost';