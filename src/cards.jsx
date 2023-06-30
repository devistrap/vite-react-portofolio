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
            <div className='flex justify-center relative main' id='main'>
        
                <div className='card relative w-96 h-96 bg-gray-800 m-10 rounded-xl shadow-2xl hover:translate-y-1 text-gray-500'
                onMouseEnter={e => {
        document.getElementById('1').style.opacity=0.8
        document.getElementById('2').style.opacity=0.8
        document.getElementById('3').style.opacity=0.8
      }} 
      onMouseLeave={e => {
        document.getElementById('1').style.opacity=1
        document.getElementById('2').style.opacity=1
        document.getElementById('3').style.opacity=1
      }} 
      id='4'   
                >
                <img src="./src/assets/symbol.png" className='w-24 h-24 ml-24 ' />
                <h1 className='text-2xl flex justify-center text-gray-300'>Scouting</h1>
                <p className="mx-9">ik zit al vanaf 2010 op Scouting en ik ben vanaf juni 2022 welpen leiding "welpen" zijn kinderen van 7-12 jaar waar we ze allemaal dingen leren zoals knopen maken en vuur maken en ik ben ook nog een "explorer" dat is de oudste groep waar het gaat over zelf dingen regelen dus in plaats van leiding hebben hebben we begeleiding</p>   
                </div>
    <div className='w-96 h-96 bg-gray-800 m-10 rounded-xl shadow-2xl hover:translate-y-1' id='1'
        onMouseEnter={e => {
            document.getElementById('4').style.opacity=0.8
            document.getElementById('2').style.opacity=0.8
            document.getElementById('3').style.opacity=0.8
      }} 
      onMouseLeave={e => {
            document.getElementById('4').style.opacity=1
            document.getElementById('2').style.opacity=1
            document.getElementById('3').style.opacity=1
      }} 
                
                >
                    content
                </div>

    <div className='w-96 h-96 bg-gray-800 m-10 rounded-xl shadow-2xl hover:translate-y-1' id='2'
        onMouseEnter={e => {
            document.getElementById('4').style.opacity=0.8
            document.getElementById('1').style.opacity=0.8
            document.getElementById('3').style.opacity=0.8
      }} 
      onMouseLeave={e => {
            document.getElementById('4').style.opacity=1
            document.getElementById('1').style.opacity=1
            document.getElementById('3').style.opacity=1
      }} 
                >
                content
                </div>

    <div className='w-96 h-96 bg-gray-800 m-10 rounded-xl shadow-2xl hover:translate-y-1' id='3'
                
    onMouseEnter={e => {
        document.getElementById('4').style.opacity=0.8
        document.getElementById('1').style.opacity=0.8
        document.getElementById('2').style.opacity=0.8
      }} 
    onMouseLeave={e => {
        document.getElementById('4').style.opacity=1
        document.getElementById('1').style.opacity=1
        document.getElementById('2').style.opacity=1
      }} 
                >
                content
                </div>
            </div>

      ) 
      }
      
}


export default Cards;