import React, {Component, Fragment} from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

class TodoList extends Component {
  render () {
    const list = this.props.tasks.map(todo => {
      return <TodoItem {...todo} key={todo.id}/>;
    });

    return (
      <>
        <TodoInput addTodo={this.props.addTodo} />
        <div>
          <ul>
            {list}
          </ul>
        </div>
      </>
    )
  };
}

export default TodoList;