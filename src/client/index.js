import React, { Component } from 'react';
import { render } from 'react-dom';

class CounterApp extends React.Component {
  state = {
    countVal: 0,
  }

  increment = () => {
    console.log('increment');
    const newVal = this.state.countVal + 1;

    this.setState({
      countVal: newVal,
    });
  }

  decrement = () => {
    console.log('decrement');
    const newVal = this.state.countVal - 1;

    this.setState({
      countVal: newVal,
    });
  }

  render() {
    return <div>
      <p>{this.state.countVal}</p>
      <button onClick={this.increment}>+</button>
      <button onClick={this.decrement}>-</button>
    </div>;
  }
}

render(<CounterApp />, document.getElementById('root'));