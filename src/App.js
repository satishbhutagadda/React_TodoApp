import React, { Component } from 'react';
import axios from "axios";
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './pages/About';
import Header from './components/layout/Header';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';


class App extends Component {
  APIURL = 'https://jsonplaceholder.typicode.com/todos';
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    axios.get(`${this.APIURL}?_limit=4`).then((response) => {
      console.log(response.data);
      this.setState({ todos: response.data })
    })
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
    axios.delete(`${this.APIURL}/${id}`).then((response) => {
      this.setState({
        todos: this.state.todos.filter(todo => {
          return todo.id !== id;
        })
      })
    })
    this.setState({
      todos: this.state.todos.filter(todo => {
        return todo.id !== id;
      })
    })
  }

  addTodo = (title) => {
    const newTodo = {
      title,
      completed: false
    }
    axios.post(this.APIURL, newTodo).then((response) => {
      this.setState({ todos: [...this.state.todos, response.data] })
    })
  }

  render() {
    return (
      <Router>
        <div className="Todo-App">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo} />
              <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
