# hproject
This is a  CRUD app that keeps track of School homework. 
There are four main users teacher, student, parent and administrator
### Teacher
 - Can add, edit and delete a homework
 - Can view a list of all homework he/she has given
### Student
 - Can view own homework list from different teachers
 - Can mark homework Done/ Completed when they are done
### Parents
 - Can view own Child's homework list
### Admin
- Can add, edit, delete and view all homeworks

## Installations
- Clone the project from this git repository
- install all backend dependancies including
  - cors 2.85
  - express 4.16.4
  - mysq l2.16.0
- Install all the frontend dependancies including
  - react
  -react-dom
  - react-router-dom 4.3.1
- Create the database using the homeworkdatabase.sql file in Database folder
  -Run command `mysql -u robot username -p secret database_name < homeworkdatabase.sql`

## Getting started
-Change directory to the Frontend h-project folder 
  - start the client side by running `npm start`
-Change directory to the Backend h-project folder 
  - start node server using command `node index`
- start the mysql database
- The app can be accessed on http://localhost:3000
-Add, edit, delete or view homework from the different views

## Deployment
`npm run build`

## Build With
ReactJS
Node & Express

## Authors
- Milla Seppala
- Pennina Muiruri
