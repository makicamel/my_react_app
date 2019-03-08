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
      maxId: -1,
      mode: 'new',
    };
  }

  componentWillReceiveProps(nextProps){
    let id, date = '';
    if (nextProps.tasks.length > 0){
      id = nextProps.tasks[nextProps.tasks.length-1].id;
      date = nextProps.tasks[nextProps.tasks.length-1].date;
    } else {
      id = 0;
      date = '';
    }
    this.setState({
      task: {
        id: id,
        date: date,
        title: '',
      },
      mode: 'new',
    });
  }
  displayInputValue = (props) => {
    this.setState({
      task: props,
      mode: 'edit',
    });
  }
  render () {
    const list = this.props.tasks.map(todo => {
      return <TodoItem {...todo} key={todo.id} displayInputValue={this.displayInputValue} />;
    });

    return (
      <>
        <TodoInput addTodo={this.props.addTodo} task={this.state.task} mode={this.state.mode} maxId={this.props.maxId} />
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