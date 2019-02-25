import React, {Component} from 'react';

function TodoItem(props){
  return (
    <li>
      {props.id}: {props.title}
    </li>
  );
}

export default TodoItem;