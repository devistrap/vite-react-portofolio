import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import * as React from 'react'

class Range extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 50,
      count1: 0
    };
  }

  addOne = () => {
    const { count } = this.state;
    if (count === 100) {
      console.info("max reached");
      this.setState({ count: "max reached" });
    } else if (count < 100) {
      this.setState({ count: count + 1 });
    }
  }

  removeOne = () => {
    const { count } = this.state;
    if (count === 0) {
      console.info("min reached");
      this.setState({ count: "min reached" });
    } else if (count > 0) {
      this.setState({ count: count - 1});
    }
  }

  submit = () => {
    const {count} = this.state
    this.state.count1 = count
    document.getElementById("score").style.display="block"
  }

  reset = () => {
    const { count } = this.state;
    this.setState({count: 50})
    document.getElementById("score").style.display="None"
    
  }

  render() {
    const { count } = this.state;
    return (
      
      <div className="App border-gray-900 border-2 w-1/3 flex justify-stretch flex-col ">
          <h1 className='my-5 text-2xl'>progress bar  "input range"</h1>
          <input type='range' min="0" max="100" value={count} id='test' className=' ml-10 h-4  '  />
          <p className='text-2xl inline text-extrabold'>{count}</p>
          <button onClick={this.submit} name='submit' className='bg-red-500 hover:bg-red-700 text-white font-bold mx-5 py-2 px-4 rounded-full  my-5 w-1/4'>submit</button>
          <div>
            <button onClick={this.addOne} className='bg-blue-500 hover:bg-blue-700 text-white font-bold mx-5 py-2 px-4 rounded-full  my-5 w-1/4'>+1</button>
            <button onClick={this.removeOne} className='bg-blue-500 hover:bg-blue-700 text-white font-bold mx-5 py-2 px-4 rounded-full  my-5 w-1/4'>-1</button>
            <button onClick={this.reset} className='bg-red-500 hover:bg-red-700 text-white font-bold mx-5 py-2 px-4 rounded-full  my-5 w-1/4'>reset</button>
          </div>
          
          
          <p id='score'>de waarde van de schuifbar is {this.state.count1}</p>

      
      </div>
    );
  }
}

export default Range;