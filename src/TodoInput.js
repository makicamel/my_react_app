import React, {Component} from 'react';

class TodoInput extends Component {
  constructor(props){
    super(props);
    // this.handleClick = this.handleClick.bind(this);
  }
  handleClick = (props) => {
    this.props.addTodo('new TODO');
  }
  render(){
    return (
      <div>
        <input placeholder="TODOを入力してください" />
        <button onClick={this.handleClick}>登録</button>
      </div>
    );
  }
}

export default TodoInput;