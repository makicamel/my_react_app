import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {title: 'default TODO', id: 0},
      ],
      uniqueId: 1,
    };

  }
  render(){
    return (
      <div>
        <h1>TODO App</h1>
        <TodoInput />
        <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
