import React, {Component} from 'react';

class Sample extends Component {
  render () {
    return <div>こんにちは、{this.props.name}さん</div>;
  }
}

export default Sample;