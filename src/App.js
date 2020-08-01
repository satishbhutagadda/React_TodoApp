import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Learn React as soon as possible!',
          completed: false
        },
        {
          id: 2,
          title: 'Learn Node js after React!',
          completed: true
        },
        {
          id: 3,
          title: 'Try read complete JavaScript.Info site!',
          completed: false
        },
      ]
    };
  }

  // Toggle Checkbox
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }

  // Delete Todo
  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => {
        return todo.id !== id;
      })
    })
  }

  addTodo = (title) => {
    const todo = {
      id: this.state.todos.length + 1,
      title,
      completed: false
    }
    return this.setState({todos: [...this.state.todos, todo]})
  }

  render() {
    return (
      <div className="Todo-App">
        <Header/>
        <AddTodo addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
