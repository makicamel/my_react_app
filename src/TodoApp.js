import React, { Component } from 'react';
import TodoList from './TodoList';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      maxId: -1,
    };
  }

  addTodo = (id, date, title) => {
    let tasks = this.state.tasks;
    const maxId = this.state.maxId;

    if (id === maxId + 1) {
      tasks.push({
        date,
        title,
        id: id,
      });
    } else {
      tasks = tasks.map((task) => {
        if (task.id === id){
          task.date = date;
          task.title = title;
        }
        return task;
      });
    }

    this.setState({
      tasks,
      maxId: tasks.length - 1,
    });
  }

  removeTodo = () => {
    this.setState({
      tasks: [],
      maxId: -1,
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
