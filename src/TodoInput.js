import React, {Component} from 'react';

class TodoInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      task: {
        id: -1,
        date: '',
        title: '',
      },
      maxId: -1,
      mode: 'new',
    };
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      task: {
        id: nextProps.task.id,
        date: nextProps.task.date,
        title: nextProps.task.title,
      },
      maxId: nextProps.maxId,
      mode: nextProps.task.id === nextProps.maxId ? 'new' : 'edit',
    });
  }
  handleChangeDate = (e) => {
    this.setState({
      task: {
        id: this.state.task.id,
        date: e.target.value,
        title: this.state.task.title,
      }
    });
  }
  handleChangeTask = (e) => {
    this.setState({
      task: {
        id: this.state.task.id,
        date: this.state.task.date,
        title: e.target.value,
      }
    });
  }
  handleClick = (props) => {
    const id = this.state.mode === 'new' ? this.state.task.id + 1 : this.state.task.id;
    const date = this.state.task.date;
    const title = this.state.task.title;
    this.props.addTodo(id, date, title);
  }
  render(){
    return (
      <div>
        <input placeholder="YYDD" onChange={this.handleChangeDate} value={this.state.task.date} />
        <input placeholder="TODOを入力してください" onChange={this.handleChangeTask} value={this.state.task.title} />
        <button onClick={this.handleClick}>登録</button>
      </div>
    );
  }
}

export default TodoInput;