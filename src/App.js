import React, { Component } from 'react';
import Todos from './components/Todos'
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import About from './components/pages/About';
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {
  state = {
    todos : [
      {
        id: 1,
        title: "Car servicing",
        completed: false
      },
      {
        id: 2,
        title: "Online shopping",
        completed: false
      },
      {
        id: 3,
        title: "Bill payment",
        completed: false
      }
    ]
  };

  addTodo = (todoTitle) => {
    const lastId = Math.max.apply(Math, this.state.todos.map(todo => todo.id));
    const todoItem = {
      id: lastId + 1,
      title: todoTitle,
      completed: false
    };
    this.setState({todos:[...this.state.todos, todoItem]});
  }

  onCompleteStateChange = (id) => {
    var todoItemIndex = this.state.todos.findIndex(todoItem => todoItem.id === id);
    let todoToUpdate = this.state.todos[todoItemIndex];
    todoToUpdate.completed = !todoToUpdate.completed;
    this.setState({todos: this.state.todos});
  }

  deleteTodo = (id) => {
    this.setState({todos: this.state.todos.filter(todo => todo.id !== id)});
  }



  render() {
    return (
      <Router>
        <Route exact path="/" 
        render={props => (
            <React.Fragment>
              <Header/>
              <AddTodo addTodo = {this.addTodo}/>
              <Todos todos = {this.state.todos} onCompleteStateChange = {this.onCompleteStateChange} 
              deleteTodo={this.deleteTodo}/>
            </React.Fragment>
          )}/>
          <Route path="/about" component={About}/>

      </Router> 
    ); 
  } 
}

export default App;
