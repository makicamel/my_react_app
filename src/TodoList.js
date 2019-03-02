import React, {Component, Fragment} from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      task: {
        id: 0,
        date: '',
        title: '',
      },
      maxId: 0,
    };
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      task: {
        id: nextProps.tasks[nextProps.tasks.length-1].id,
        date: '',
        title: '',
      }
    });
  }
  displayInputValue = (props) => {
    this.setState({
      task: props,
    });
  }
  render () {
    const list = this.props.tasks.map(todo => {
      return <TodoItem {...todo} key={todo.id} displayInputValue={this.displayInputValue} />;
    });

    return (
      <>
        <TodoInput addTodo={this.props.addTodo} task={this.state.task} maxId={this.props.maxId} />
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