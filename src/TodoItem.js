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
    this.state.displayInputValue(this.state.title);
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