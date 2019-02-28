import React, {Component} from 'react';

class TodoInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      task: {
        id: 0,
        title: '',
      },
      maxId: 0,
    };
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      task: {
        id: nextProps.task.id,
        title: nextProps.task.title,
      },
      maxId: nextProps.maxId,
    });
  }
  handleChange = (e) => {
    this.setState({
      task: {
        id: this.state.task.id,
        title: e.target.value,
      }
    });
  }
  handleClick = (props) => {
    const id = this.state.task.id === this.state.maxId - 1 ? this.state.task.id + 1 : this.state.task.id;
    const title = this.state.task.title;
    this.props.addTodo(id, title);
  }
  render(){
    return (
      <div>
        <input placeholder="TODOを入力してください" onChange={this.handleChange} value={this.state.task.title} />
        <button onClick={this.handleClick}>登録</button>
      </div>
    );
  }
}

export default TodoInput;