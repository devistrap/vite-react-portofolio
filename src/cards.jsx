import { useState } from 'react'
import './index.css'
import * as React from 'react'

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         
        };
      }
      render(){
      return(
            <div className='flex justify-center'>
                <div className='w-96 h-96 bg-purple-500 m-10 rounded-xl shadow-2xl hover:translate-y-6'>
                    <img src='./assets/scouting.jpg'/>
            
                </div>
                <div className='w-96 h-96 bg-purple-500 m-10 rounded-xl shadow-2xl hover:translate-y-6'>2</div>
                <div className='w-96 h-96 bg-purple-500 m-10 rounded-xl shadow-2xl hover:translate-y-6'>3</div>
                <div className='w-96 h-96 bg-purple-500 m-10 rounded-xl shadow-2xl hover:translate-y-6'>4</div>
            </div>

      ) 
      }
      
}


export default Cards;