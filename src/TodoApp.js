import React, { Component } from 'react';
import TodoList from './TodoList';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      maxId: 0,
    };
  }

  addTodo = (id, title) => {
    const {
      tasks,
      maxId,
    } = this.state;
    // もしidが新規のものだったら = maxIdと等しければpushする
    // idがmaxIdよりも小さければeditする
    if (id === maxId) {
      tasks.push({
        title,
        id: maxId,
      });
    } else {

    }

    this.setState({
      tasks,
      maxId: tasks.length,
    });
  }

  removeTodo = () => {
    this.setState({
      tasks: [],
      maxId: 0,
    });
  }

  render(){
    return (
      <div>
        <h1>TODO App</h1>
        <TodoList tasks={this.state.tasks} maxId={this.state.maxId} addTodo={this.addTodo} />
        <button onClick={this.removeTodo}>reset TODOs</button>
      </div>
    );
  }
}

export default TodoApp;
