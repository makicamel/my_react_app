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

  componentWillReceiveProps(nextProps){
    if (nextProps.title !== this.state.title) {
      this.state.title = nextProps.title;
    }
  }
  handleClick = (props) => {
    const todoProps = {
      id: this.state.id,
      date: this.state.date,
      title: this.state.title,
    };
    this.state.displayInputValue(todoProps);
  }
  render(){
    return (
      <li onClick={this.handleClick}>
        {this.state.id}: {this.state.title}({this.state.date})
      </li>
    );
  }
}

export default TodoItem;