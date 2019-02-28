import React, {Component} from 'react';

class TodoItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      id: props.id,
      title: props.title,
      displayInputValue: props.displayInputValue,
    };
  }

  handleClick = (props) => {
    const todoProps = {
      id: this.state.id,
      title: this.state.title,
    };
    this.state.displayInputValue(todoProps);
  }
  render(){
    return (
      <li onClick={this.handleClick}>
        {this.state.id}: {this.state.title}
      </li>
    );
  }
}

export default TodoItem;