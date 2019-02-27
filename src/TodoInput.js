import React, {Component} from 'react';

class TodoInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
    };
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      inputValue: nextProps.inputValue,
    });
  }
  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  }
  handleClick = (props) => {
    const inputValue = this.state.inputValue;
    this.props.addTodo(inputValue);
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