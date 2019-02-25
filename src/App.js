import React, { Component, Fragment } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import './App.css';

class App extends Component {
  render(){
    // TODO: 後からstateで管理する
    const tasks = [
      {title: 'Todo1つめ', id: 0},
      {title: 'Todo2つめ', id: 1},
    ];

    return (
      <div>
        <h1>TODO App</h1>
        {/* <TodoInput />
        <TodoList tasks={tasks} /> */}
      </div>
    );
  }
}

export default App;
