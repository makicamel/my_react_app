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
    // bindをすることでaddTodoメソッドがAppコンポーネントのstateを受け取れるようになる
    // this.addTodo = this.addTodo.bind(this);
  }

  // addTodoを無名関数を代入する形で定義することで最初からbindされたメソッドを作成できる
  // addTodo(title){
  addTodo = (title) => {
    const {
      tasks,
      uniqueId,
    } = this.state;

    tasks.push({
      title,
      id: uniqueId,
    });

    this.setState({
      tasks,
      uniqueId: uniqueId + 1,
    })
  }

  render(){
    return (
      <div>
        <h1>TODO App</h1>
        <TodoInput addTodo={this.addTodo} />
        <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
