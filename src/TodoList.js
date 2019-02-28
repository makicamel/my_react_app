import React, {Component, Fragment} from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: {
        id: 0,
        title: '',
      },
    };
  }

  displayInputValue = (props) => {
    this.setState({
      inputValue: props,
    });
  }
  render () {
    const list = this.props.tasks.map(todo => {
      return <TodoItem {...todo} key={todo.id} displayInputValue={this.displayInputValue} />;
    });

    return (
      <>
        <TodoInput addTodo={this.props.addTodo} inputValue={this.props.tasks} />
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