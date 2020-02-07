import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router>
          <div className="main">
            <TodoForm />
            <Route path="/:filter?" render={({match})=>(

              <TodoList filter={ match.params.filter } />
            )}>
            </Route>
            <Nav />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
