import React, {Component} from 'react';

class TodoInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputId: 0,
      inputValue: '',
    };
  }
  componentWillReceiveProps(nextProps){
    const task = nextProps.inputValue;
    this.setState({
      inputId: task.id,
      inputValue: task.title,
    });
  }
  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  }
  handleClick = (props) => {
    const inputId = this.state.inputId;
    const inputValue = this.state.inputValue;
    this.props.addTodo(inputId, inputValue);
  }

  render(){
    return (
      <div>
        <input placeholder="TODOを入力してください" onChange={this.handleChange} value={this.state.inputValue} />
        <button onClick={this.handleClick}>登録</button>
      </div>
    );
  }
}

export default TodoInput;