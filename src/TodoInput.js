import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
class TodoInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      task: {
        id: -1,
        date: new Date(),
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
  handleChangeDate = (date) => {
    this.setState({
      task: {
        id: this.state.task.id,
        date: date,
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
        <DatePicker selected={this.state.task.date} onChange={this.handleChangeDate} />
        <input placeholder="TODOを入力してください" onChange={this.handleChangeTask} value={this.state.task.title} />
        <button onClick={this.handleClick}>登録</button>
      </div>
    );
  }
}

export default TodoInput;