import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import Sample from './sample.js';
import './App.css';

const Person = (props) => {
  return (
    <ul>
      <li>name: {props.name}</li>
      <li>bitrhday: {props.birthDay}</li>
    </ul>
  )
}

Person.propTypes = {
  name: PropTypes.string,
};

const profile = {
  name: 'makicamel',
  birthDay: '1984/05/28',
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Person {...profile}/>
        </header>
      </div>
    );
  }
}

export default App;
