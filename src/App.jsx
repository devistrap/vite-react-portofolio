import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import * as React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 50
    };
  }

  addOne = () => {
    const { count } = this.state;
    if (count === 100) {
      console.info("max reached");
    } else if (count < 100) {
      this.setState({ count: count + 1 });
    }
  }

  removeOne = () => {
    const { count } = this.state;
    if (count === 0) {
      console.info("min reached");
    } else if (count > 0) {
      this.setState({ count: count - 1 });
    }
  }

  render() {
    const { count } = this.state;
    return (
      <div className="App">
        <h1>progress bar</h1>
        <input type='range' min="0" max="100" value={count} id='test'  />
        <button onClick={this.addOne} >add 1</button>
        <button onClick={this.removeOne}>remove 1</button>
        <p >{count}</p>
      </div>
    );
  }
}

export default App;