import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from './components/home';
import HomeworkList from './components/homework';
import Student from './components/student';
import Teacher from './components/teacher';
import Login from './components/Login';
import Navbar from './components/navbar';

class App extends Component {

  render() {
    return (
      <div className="App" >
        <header className="App-header">
				<Navbar />
				<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/students" component={Student} />
				<Route path="/parents" component={Home} />
				<Route path="/teachers" component={Teacher} />
				<Route path="/admin" component={HomeworkList} />
				<Route path="/login" component={Login} />
				</Switch>
        </header>
      </div>
    );
  }
}

export default App;
