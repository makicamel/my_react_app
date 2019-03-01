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
    let tasks = this.state.tasks;
    const maxId = this.state.maxId;

    if (id === maxId) {
      tasks.push({
        title,
        id: maxId,
      });
    } else {
      tasks = tasks.map((task) => {
        if (task.id == id){
          task.title = title;
        }
        return task;
      });
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
