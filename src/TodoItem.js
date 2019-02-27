import React, {Component} from 'react';

class TodoItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      id: props.id,
      title: props.title,
    }
  }
  render (){
    return (
      <li>
        {this.state.id}: {this.state.title}
      </li>
    );
  }
}

export default TodoItem;